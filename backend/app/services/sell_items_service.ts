import { CalculatedSellItemDto, CreateSellItemDto } from "../dto/sell_item_dto.js"
import ProductRepository from "../repositories/products_repository.js"
import SellItemRepository from "../repositories/sell_items_repository.js"

export default class SellItemService {
  sellItemRepository: SellItemRepository
  ProductRepository: ProductRepository

  constructor() {
    this.sellItemRepository = new SellItemRepository() 
    this.ProductRepository = new ProductRepository()
  }

  async create(sellItems: CreateSellItemDto, sellId: number){
    const sellItemCreate = sellItems.map(item => ({
        ...item,
        sellId,
    }))
    const createdSellItems = await this.sellItemRepository.create(sellItemCreate)
    const ids = createdSellItems.map(item => item.product.price)
    const items = await this.sellItemRepository.getMany(ids)
    return items
  }

  async stockVerification(id: number) {
    return this.sellItemRepository.stockVerification(id)
  }
  
  async stockSubtract(id: number) {
    return this.sellItemRepository.stockSubtract(id)
  }

  async getBySellId(sellId: number) {
    return await this.sellItemRepository.getBySellId(sellId)
  }

  calculateTotalPrice(createdSellItems: CalculatedSellItemDto) {
    let totalPrice = 0;
    createdSellItems.forEach(item => {
        totalPrice += item.product.price * item.quantity 
    });
    return totalPrice
  }
}