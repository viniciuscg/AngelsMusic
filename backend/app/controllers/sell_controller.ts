import SellService from "#services/sell_service";
import { createSellValidator, getSellValidator, updateSellValidator } from "#validators/sell";
import type { HttpContext } from '@adonisjs/core/http'

export default class SellController {
  sellService: SellService

  constructor() {
    this.sellService = new SellService()
  }

  async create({ request }: HttpContext){
    const data = request.all()
    const payload = await createSellValidator.validate(data)

    return this.sellService.create(payload)
  }

  async update({ request }: HttpContext){
    const { id } = request.params()
    const data = request.all()
    
    const payload = await updateSellValidator.validate({...data, id})
    
    return this.sellService.update(payload)
  }

  async get({ request }: HttpContext) {
    const { id } = request.params()
    const payload = await getSellValidator.validate(id)

    return this.sellService.get(payload)
  }

  async getTotalValue() {
    return this.sellService.getTotalValue()
  }

  async getTotalOders() {
    return this.sellService.getTotalOrders()
  }
}
