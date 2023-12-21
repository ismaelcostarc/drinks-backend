import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class FavoritesController {
  public async index({ auth, response }: HttpContextContract) {
    const user = auth.user
    const favorites = await user?.related('drinks').query()
    return response.ok({ data: favorites, meta: { total: favorites.length } })
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
