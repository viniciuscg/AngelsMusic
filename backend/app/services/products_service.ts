import { CreateProductDto, UpdateProductDto } from "../dto/product_dto.js"
import ProductRepository from "../repositories/products_repository.js"

export default class ProductService {
  productRepository: ProductRepository

  constructor() {
    this.productRepository = new ProductRepository()
  }
  async create(data: CreateProductDto){
    return this.productRepository.create(data)
  }

  async update(data: UpdateProductDto){
    return this.productRepository.update(data)
  }

  async deactivate(id: number){
    return this.productRepository.deactivate(id)
  }
  
  async get(id: number) {
    return this.productRepository.get(id)
  }
 
  async getAll() {
    return await this.productRepository.getAll()
  } 
}