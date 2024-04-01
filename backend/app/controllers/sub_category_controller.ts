import SubCategoryService from "#services/sub_category_service"
import { createSubCategoryValidator, deleteSubCategoryValidator, getSubCategoryValidator, updateSubCategoryValidator } from "#validators/subCategory"
import { HttpContext } from "@adonisjs/core/http"

export default class SubCategoryController {
  subCategoryService: SubCategoryService

  constructor() {
    this.subCategoryService = new SubCategoryService()
  }

  async create({ request }: HttpContext) {
    const data = request.all()
    const payload = await createSubCategoryValidator.validate(data)

    return this.subCategoryService.create(payload)
  }

  async update({ request }: HttpContext){
    const { id } = request.params()
    const data = request.all()
    const payload = await updateSubCategoryValidator.validate({...data, id})

    return this.subCategoryService.update(payload)
  }

  async getRelated({ request }: HttpContext){
    const { categoryid } = request.params()

    const payload = await getSubCategoryValidator.validate(categoryid)
    return this.subCategoryService.getRelated(payload.id)
  }

  
  async delete({ request, response }: HttpContext){
    try {
      const { id } = request.params()
      const payload = await deleteSubCategoryValidator.validate({id})

      if(!id) throw new Error('User not found')

      await this.subCategoryService.delete(payload.id)

      response.json({
        message: 'done'
      })

    } catch (error) {
      response.status(500).send({
        error: 'Unexpected error while deleting user'
      })
    }
  }

  async getAll({ response }: HttpContext) {
    const data = await this.subCategoryService.getAll()
    return response.json(data)
  }
}