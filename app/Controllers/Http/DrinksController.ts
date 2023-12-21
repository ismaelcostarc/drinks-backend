import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drink from 'App/Models/Drink';

export default class DrinksController {
  public async index({ request, response }: HttpContextContract) {
    const qs = request.qs()

    if (qs.search) {
      const searchedDrinks = await Drink.query()
        .whereRaw('LOWER(name) LIKE ?', [`%${qs.search.toLowerCase()}%`])

      return response.ok({
        data: searchedDrinks, meta: {
          total: searchedDrinks.length
        }
      })
    }

    const drinks = await Drink.query();
    return response.ok({
      data: drinks,
      meta: {
        total: drinks.length
      }
    })
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const drink = await Drink.find(params.id);

      if (!drink) {
        return response.notFound('Drink not found')
      }

      return response.ok({ data: drink })
    } catch (error) {
      return response.internalServerError();
    }
  }

  public async getByCategory({ params, response }: HttpContextContract) {
    const { categoryId } = params;

    try {
      const drinks = await Drink.query().where('category_id', categoryId);
      return response.ok({
        data: drinks, meta: {
          total: drinks.length
        }
      });
    } catch (_) {
      return response.internalServerError();
    }
  }
}
