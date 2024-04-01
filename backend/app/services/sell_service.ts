import { SellStatus } from "../dto/enum.js"
import { CreateSellDto, GetSellDto, UpdateSellDto } from "../dto/sell_dto.js"
import SellRepository from "../repositories/sell_repository.js"
import SellItemService from "./sell_items_service.js"

export default class SellService {
  sellRepository: SellRepository
  sellItemService: SellItemService

  constructor() {
    this.sellRepository = new SellRepository()
    this.sellItemService = new SellItemService()
  }

  async create(data: CreateSellDto){
    const sell = await this.sellRepository.create({
      ...data,
      status: SellStatus.PROCESSING,
      price: 0
    })
    const sellItems = await this.sellItemService.create(data.items, sell.id) 
    const total = this.sellItemService.calculateTotalPrice(sellItems)
    const updatedSell = await this.sellRepository.updatePrice(sell.id, total)
    return updatedSell
  }

  async update(data: UpdateSellDto ){
    const response: SellStatus = data.status as SellStatus;
    return this.sellRepository.updateStatus(data.id, response)
  }
  
  async get(data: GetSellDto) {
    return this.sellRepository.get(data.id)
  }
}