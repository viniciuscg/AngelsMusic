import { api } from "../api";
import { IProduct, IProductCreate } from "./productType";

export default class ProductService {
  static async create(data: IProductCreate) {
    const response = await api.post('/product', data)
    return response.data
  }

  static async update(data: IProduct) {
    const response = await api.put(`/product${data.id}`, data)
    return response.data
  }

  static async deactivate(data: IProduct) {
    const response = await api.post(`/product/deactivate${data.id}`, data)
    return response.data
  }

  static async get(id: number) {
    const response = await api.get(`/product/${id}`)
    return response.data
  }

  static async getAll() {
    const response = await api.get('/product')
    return response.data
  }
}