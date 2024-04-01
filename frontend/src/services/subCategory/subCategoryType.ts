import { ICategory } from "../category/categoryType"

export interface ISubCategory {
  id: number
  description: string
  category: ICategory
}

export interface ICreateSubCategory {
  description: string
  categoryId: number
}

export interface IUpdateSubCategory {
  id: number
  description: string
  categoryId: number
}
