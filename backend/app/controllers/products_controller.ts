import ProductService from "#services/products_service"
import { createProductValidator, deactivateProductValidator, getProductValidator, updateProductValidator } from "#validators/product"
import { HttpContext } from "@adonisjs/core/http"

export default class ProductController {
  productService: ProductService

  constructor() {
    this.productService = new ProductService()
  }

  async create({ request }: HttpContext){
    const data = request.all()
    const payload = await createProductValidator.validate(data)

    return this.productService.create(payload)
  }

  async update({ request }: HttpContext){
    const { id } = request.params()
    const data = request.all()
    const payload = await updateProductValidator.validate({...data, id})
    
    return this.productService.update(payload)
  }

  async deactivate({ request }: HttpContext){
    const { id } = request.params()
    const data = request.all()

    const payload = await deactivateProductValidator.validate({...data, id})
    
    return this.productService.deactivate(payload)
  }
  
  async get({ request }: HttpContext) {
    const { id } = request.params()
    const payload = await getProductValidator.validate(id)

    return this.productService.get(payload.id)
  }
}