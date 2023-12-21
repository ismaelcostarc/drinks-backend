import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category';

export default class CategoriesController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1)
    const pageSize = request.input('pageSize', 100)
    const sortBy = request.input('sortBy', 'name')
    const order = request.input('order', 'asc')

    const categories = await Category.query()
      .orderBy(sortBy, order)
      .paginate(page, pageSize)

    return response.ok({
      data: categories.toJSON(),
      meta: {
        total: categories.total,
        perPage: pageSize,
        page,
        lastPage: categories.lastPage,
      }
    })
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
