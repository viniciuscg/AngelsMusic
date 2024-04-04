import { api } from "../api";
import { IProduct, IProductCreate, IProductUpdate } from "./productType";

export default class ProductService {
  static async create(data: IProductCreate) {
    const response = await api.post<IProduct>('/product', data)
    return response.data
  }

  static async update(data: IProductUpdate) {
    const response = await api.put(`/product/${data.id}`, data)
    return response.data
  }

  static async deactivate(id: number) {
    const response = await api.put(`/product/deactivate/${id}`)
    return response.data
  }

  static async get(id: number) {
    const response = await api.get(`/product/${id}`)
    return response.data
  }

  static async getAll() {
    const response = await api.get<IProduct[]>('/product')
    return response.data
  }
}