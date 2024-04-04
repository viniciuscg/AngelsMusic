import Product from "#models/product"
import { CreateProductDto, UpdateProductDto } from "../dto/product_dto.js"

export default class ProductRepository {
  async create(product: CreateProductDto){
    const productCreate = new Product

    productCreate.description = product.description
    productCreate.model = product.model
    productCreate.img = product.img
    productCreate.price = product.price 
    productCreate.quantity = product.quantity
    productCreate.categoryId = product.categoryId
    productCreate.subCategoryId = product.subCategoryId
    productCreate.active = true

    await productCreate.save()
    return productCreate
  }

  async update(product: UpdateProductDto){
    const findProduct = await Product.findOrFail(product.id) 

    findProduct.model = product.model
    findProduct.quantity = product.quantity
    findProduct.description = product.description
    findProduct.price = product.price
    findProduct.img = product.img
    findProduct.categoryId = product.categoryId
    findProduct.subCategoryId = product.subCategoryId

    await findProduct.save()
    return findProduct
  }

  async deactivate(id: number){
    const findProduct = await Product.findOrFail(id) 

    findProduct.active = !findProduct.active

    await findProduct.save()
    return findProduct
  }
    
  async getMany(ids: number[]): Promise<Product[]> {
    const products = await Product
        .query()
        .whereIn('id', ids)
        .preload('category')
        .preload('sub_category');

    return products;
  }

  async get(data: number) {
    const product = await Product
    .query()
    .where('id', data)

    return product
  }

  async getAll() {
    return await Product
      .query()
      .preload('category')
      .preload('sub_category')
  }

  async getTotalValue() {
    return await Product
      .query()
      .preload('category')
      .preload('sub_category')
  }
}