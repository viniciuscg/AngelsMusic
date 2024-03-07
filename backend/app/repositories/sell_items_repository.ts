import SellItem from "#models/sell_item"
import { SellItemDto } from "../dto/sell_item_dto.js"

export default class SellItemsRepository {
    async create(sellItems: Omit<SellItemDto, "id">[]){
        const sellItem = await SellItem.createMany(sellItems) 
        return sellItem
    }
}