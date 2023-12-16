import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FavoritesController {
  public async index({ auth, response }: HttpContextContract) {
    const user = auth.user
    const favorites = await user?.related('drinks').query()
    return response.ok(favorites)
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const user = auth.user
    const drinkId: string = request.input('drink_id')
    const favorite = await user?.related('drinks').attach([drinkId])
    return response.created(favorite)
  }

  public async destroy({ auth, params, response }: HttpContextContract) {
    const user = auth.user
    const drinkId = params.id
    await user?.related('drinks').detach([drinkId])
    return response.noContent()
  }
}
