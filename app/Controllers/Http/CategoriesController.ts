import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category';

export default class CategoriesController {
  public async index({ response }: HttpContextContract) {
    const categories = await Category.query();
    return response.ok({
      data: categories,
      total: categories.length
    })
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const category = await Category.find(params.id);
      return response.ok({
        data: category
      })
    } catch (_) {
      return response.internalServerError();
    }
  }
}
