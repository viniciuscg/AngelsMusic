import SellItem from "#models/sell_item"
import { SellItemDto } from "../dto/sell_item_dto.js"

export default class SellItemRepository {
  async create(sellItems: Omit<SellItemDto, "id">[]){
    const items = await SellItem.createMany(sellItems)
    return items
  }

  async stockVerification(id: number) {
    const sellItem = await SellItem
        .query()
        .where('id', id)
        .first()

    if (sellItem && sellItem.quantity > 0) 
        return sellItem
    else 
        return new Error('text cant be null')
  }
  
  async stockSubtract(id: number) {
    const findSellItem = await SellItem.findOrFail(id) 
    
    findSellItem.quantity -= 1;

    await findSellItem.save()
    return findSellItem
  }
        
  async getBySellId(sellId: number) {
    const sellItem = await SellItem
        .query()
        .where('sellId', sellId)
        .preload('product')

    return sellItem
  }

  async getMany(ids: number[]) {
    return SellItem
        .query()
        .whereIn('id', ids)
        .preload('product')
  }
}