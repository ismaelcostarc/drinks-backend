import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category';

export default class CategoriesController {
  public async index() {
    const categories = await Category.query();
    return categories
  }

  public async show({ params }: HttpContextContract) {
    try {
      const category = await Category.find(params.id);
      if (category) {
        return category
      }
    } catch (error) {
      console.log(error)
    }
  }

/*   public async update({  request, params }: HttpContextContract) {
    const category = await Category.find(params.id);
    if (category) {
      category.name = request.input('name');
      category.description = request.input('description');

      if (await category.save()) {
        return category
      }
      return; // 422
    }
    return; // 401
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const user = await auth.authenticate();
    const category = new Category();
    category.name = request.input('name');
    category.description = request.input('description');
    await category.save()
    return category
  } */

/*   public async destroy({ response, auth, request, params }: HttpContextContract) {
    const user = await auth.authenticate();
    const category = await Category.query().where('id', params.id).delete();
    return response.json({ message: "Deleted successfully" })
  } */
}
