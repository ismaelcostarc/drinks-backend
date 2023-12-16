import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drink from 'App/Models/Drink';

export default class DrinksController {
  public async index() {
    const drinks = await Drink.query();
    return drinks
  }

  public async show({ params }: HttpContextContract) {
    try {
      const drink = await Drink.find(params.id);
      if (drink) {
        return drink
      }
    } catch (error) {
      console.log(error)
    }
  }

  public async getByCategory({ params, response }: HttpContextContract) {
    const { categoryId } = params;

    try {
      const drinks = await Drink.query().where('category_id', categoryId);
      return response.ok(drinks);
    } catch (error) {
      return response.badRequest({ message: 'Erro ao buscar as bebidas da categoria.' });
    }
  }
/* 
  public async update({ auth, request, params }: HttpContextContract) {
    const drink = await Drink.find(params.id);
    if (drink) {
      drink.name = request.input('name');
      drink.description = request.input('description');

      if (await drink.save()) {
        return drink
      }
      return; // 422
    }
    return; // 401
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const user = await auth.authenticate();
    const drink = new Drink();
    drink.name = request.input('name');
    drink.description = request.input('description');
    await drink.save()
    return drink
  }

  public async destroy({ response, auth, request, params }: HttpContextContract) {
    const user = await auth.authenticate();
    const drink = await Drink.query().where('id', params.id).delete();
    return response.json({ message: "Deleted successfully" })
  } */
}
