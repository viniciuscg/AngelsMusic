import { api } from "../api";
import { ICategory, ICreateCategory } from "./categoryType";

export default class CategoryService {
  static async create(category: ICreateCategory) {
    const response = await api.post('/category', category)
    return response.data
  }

  static async update(data: ICategory) {
    const response = await api.put(`/category/${data.id}`, data)
    return response.data
  }

  static async getAll() {
    const response = await api.get<ICategory[]>('/category')
    return response.data
  }

  static async delete(id: number) {
    await api.delete<ICategory>(`/category/${id}`)
  }
}