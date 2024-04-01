import CategoryService from "#services/category_service"
import { createCategoryValidator, deleteCategoryValidator, updateCategoryValidator } from "#validators/category"
import { HttpContext } from "@adonisjs/core/http"

export default class CategoryController {
  categoryService: CategoryService

  constructor() {
    this.categoryService = new CategoryService()
  }

  async create({ request }: HttpContext) {
    const data = request.all()
    const payload = await createCategoryValidator.validate(data)

    return this.categoryService.create(payload)
  }

  async update({ request }: HttpContext){
    const { id } = request.params()
    const data = request.all()
    const payload = await updateCategoryValidator.validate({...data, id})

    return this.categoryService.update(payload)
  }

  async delete({ request, response }: HttpContext){
    try {
      const { id } = request.params()
      const payload = await deleteCategoryValidator.validate({id})

      if(!id) throw new Error('User not found')

      await this.categoryService.delete(payload.id)

      response.json({
        message: 'done'
      })

    } catch (error) {
      response.status(500).send({
        error: 'Unexpected error while deleting user'
      })
    }
  }

  async getAll() {
    const data = await this.categoryService.getAll()
    return data
  }

}