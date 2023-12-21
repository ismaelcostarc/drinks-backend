import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category';

export default class CategoriesController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1)
    const pageSize = request.input('page-size', 100)
    const sortBy = request.input('sort-by', 'name')
    const order = request.input('order', 'asc')

    const categories = await Category.query()
      .orderBy(sortBy, order)
      .paginate(page, pageSize)

    return response.ok(categories)
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const category = await Category.find(params.id);
      
      if (!category) {
        return response.notFound()
      }

      return response.ok({
        data: category
      })
    } catch (_) {
      return response.internalServerError();
    }
  }
}
