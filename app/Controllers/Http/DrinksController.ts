import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drink from 'App/Models/Drink';

export default class DrinksController {
  public async index({ request, response }: HttpContextContract) {
    const qs = request.qs()

    if(qs.search) {
      const searchedDrinks = await Drink.query()
        .whereRaw('LOWER(name) LIKE ?', [`%${qs.search.toLowerCase()}%`])

      return response.ok(searchedDrinks)
    }

    const drinks = await Drink.query();
    return response.ok(drinks)
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const drink = await Drink.find(params.id);
      return response.ok(drink)
    } catch (error) {
      console.log(error)
    }
  }

  public async getByCategory({ params, response }: HttpContextContract) {
    const { categoryId } = params;

    try {
      const drinks = await Drink.query().where('category_id', categoryId);
      return response.ok(drinks);
    } catch (_) {
      return response.internalServerError();
    }
  }
}
