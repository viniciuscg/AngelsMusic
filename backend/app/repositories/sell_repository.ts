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
    
    async update(data: number){
        const sell = new Sell

        sell.status = data

        await sell.save()
        return sell
    }

    async get(data: number) {
        const sell = await Sell
            .query()
            .where('id', data)

        return sell
    }

}