import { api } from "../api";
import { ICreateSubCategory, ISubCategory } from "./subCategoryType";

export default class SubCategoryService {
  static async create(category: ICreateSubCategory) {
    const response = await api.post('/sub-category', category)
    return response.data
  }

  static async update(category: ICreateSubCategory) {
    const response = await api.post('/sub-category', category)
    return response.data
  }

  static async delete(id: number) {
    const response = await api.delete(`/sub-category/${id}`)
    return response.data
  }

  static async getRelated(categoryId: number) {
    const response = await api.get<ISubCategory[]>(`/sub-category/category/${categoryId}`)
    return response.data
  }

  static async getAll() {
    const response = await api.get<ISubCategory[]>('/sub-category')
    return response.data
  }

}
