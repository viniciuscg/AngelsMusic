import { api } from "../api";
import { ISellCreate, ISellGet, ISellUpdate } from "./sellTypes";

export default class SellService {
  static async create(data: ISellCreate) {
    const respose = await api.post('/sell', data)
    return respose.data
  }

  static async update(data: ISellUpdate) {
    const response = await api.post(`/sell/${data.id}`, data)
    return response.data
  }
  
  static async get(data: ISellGet) {
    const response = await api.get(`/sell${data.id}`)
    return response.data
  }

  static async getTotalValue() {
    const response = await api.get('/sell/total-value')
    return response.data
  }

  static async getTotalOrders() {
    const response = await api.get('/sell/total-oders')
    return response.data
  }
}