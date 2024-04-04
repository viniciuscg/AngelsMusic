import Sell from "#models/sell"
import { SellDto } from "../dto/sell_dto.js"

export default class SellRepository {
  async create(data: Omit<SellDto, "id">){
    const sell = new Sell

    sell.price = data.price
    sell.userId = data.userId

    await sell.save()
    return sell
  }
    
  async updateStatus(id: number, status: number){
    const sell = await Sell.findOrFail(id) 

    sell.status = status

    await sell.save()
    return sell
  }

  async get(data: number) {
    const sell = await Sell
        .query()
        .where('id', data)

    return sell
  }

  async updatePrice(id: number, price: number){
    const sell = await Sell.findOrFail(id) 

    sell.price = price

    await sell.save()
    return sell
  }

  async getTotalValue() {
    return await Sell
      .query()
  }

  async getTotalOrders() {
    return await Sell
      .query()
  }
}