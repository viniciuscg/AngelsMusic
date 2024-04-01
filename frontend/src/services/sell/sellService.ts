import { api } from "../api";
import { ISellCreate, ISellGet, ISellUpdate } from "./sellTypes";

export default class SellService {
  static async create(data: ISellCreate) {
    const respose = await api.post('/createSell', data)
    return respose.data
  }

  static async update(data: ISellUpdate) {
    const response = await api.post(`/updateSell${data.id}`, data)
    return response.data
  }
  
  static async get(data: ISellGet) {
    const response = await api.get(`/getSell${data.id}`)
    return response.data
  }
}