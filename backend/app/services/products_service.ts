import { DeactivateProductDto, ProductDto } from "../dto/product_dto.js"
import ProductRepository from "../repositories/products_repository.js"

export default class ProductService {
    productRepository: ProductRepository

    constructor() {
        this.productRepository = new ProductRepository()
    }
    async create(data: Omit<ProductDto, "id">){
        return this.productRepository.create(data)
    }

    async update(data: ProductDto){
        return this.productRepository.update(data)
    }

    async deactivate(data: DeactivateProductDto){
        return this.productRepository.deactivate(data)
    }
    
    async get(id: number) {
        return this.productRepository.get(id)
    }
}