import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class FavoritesController {
  public async index({ auth, response, request }: HttpContextContract) {
    const page = request.input('page', 1)
    const pageSize = request.input('pageSize', 100)
    const sortBy = request.input('sortBy', 'name')
    const order = request.input('order', 'asc')

    const user = auth.user
    const favorites = await user
      ?.related('drinks')
      .query()
      .orderBy(sortBy, order)
      .paginate(page, pageSize)

    return response.ok({
      data: favorites,
      meta: {
        total: favorites.total,
        perPage: pageSize,
        page,
        lastPage: favorites.lastPage,
      }
    })
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const user = auth.user

    const newPostSchema = schema.create({
      drink_id: schema.string(),
    })

    const payload = await request.validate({ schema: newPostSchema })

    const favorite = await user?.related('drinks').attach([payload.drink_id])

    return response.created(favorite)
  }

  public async destroy({ auth, params, response }: HttpContextContract) {
    const user = auth.user
    const drinkId = params.id
    await user?.related('drinks').detach([drinkId])
    return response.noContent()
  }
}
