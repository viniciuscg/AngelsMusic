import { ICategory } from "../category/categoryType"

export interface IProduct {
  id: number
  model: string
  quantity: number
  description: string 
  img: string 
  price: number
  active: boolean
  category: ICategory
  sub_category: {id: number, description: string, categoryId: number}
}
  
export interface IDeactivateProduct {
  id: number
  active: boolean
}
  
export interface IProductCreate {
  model: string
  quantity: number
  description: string 
  img: string 
  price: number
  categoryId: number
  subCategoryId: number
}

  
export interface IProductUpdate {
  id: number
  model: string
  quantity: number
  description: string 
  img: string 
  price: number
  categoryId: number
  subCategoryId: number
}