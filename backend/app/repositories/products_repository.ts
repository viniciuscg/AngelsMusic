import Product from "#models/product"
import { DeactivateProductDto, ProductDto } from "../dto/product_dto.js"

export default class ProductRepository {
    async create(product: Omit<ProductDto, "id">){
        const productCreate = new Product

        productCreate.description = product.description
        productCreate.model = product.model
        productCreate.img = product.img
        productCreate.price = product.price 
        productCreate.quantity = product.quantity

        await productCreate.save()
        return productCreate
    }

    async update(product: ProductDto){
        const findProduct = await Product.findOrFail(product.id) 

        findProduct.price = product.price
        findProduct.description = product.description
        findProduct.img = product.img
        findProduct.model = product.model
        findProduct.quantity = product.quantity

        await findProduct.save()
        return findProduct
    }

    async deactivate(data: DeactivateProductDto){
        const findProduct = await Product.findOrFail(data.id) 

        findProduct.active = data.active

        await findProduct.save()
        return findProduct
    }
    
    async getMany(ids: number[]): Promise<Product[]> {
        const products = await Product
            .query()
            .whereIn('id', ids)
            .preload('category')
            .preload('subCategory');
    
        return products;
    }

    async get(data: number) {
        const product = await Product
        .query()
        .where('id', data)

        return product
    }
}