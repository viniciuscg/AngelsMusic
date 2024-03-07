import ProductService from "#services/products_service"
import { createProductValidator, desactiveProductValidator, getProductValidator, updateProductValidator } from "#validators/product"
import { HttpContext } from "@adonisjs/core/http"

export default class ProductsController {
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
        const data = request.all()
        const payload = await updateProductValidator.validate(data)
        
        return this.productService.update(payload)
    }

    async deactivate({ request }: HttpContext){
        const data = request.all()
        const payload = await desactiveProductValidator.validate(data)
        
        return this.productService.deactivate(payload)
    }
    
    async get({ request }: HttpContext) {
        const data = request.all()
        const payload = await getProductValidator.validate(data)

        return this.productService.get(payload.id)
    }
}