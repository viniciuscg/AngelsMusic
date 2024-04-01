export interface ProductDto {
  id: number
  model: string
  quantity: number
  description: string 
  img: string 
  price: number
  active: boolean
  categoryId: number
  subCategoryId: number
}

export interface CreateProductDto {
  model: string
  quantity: number
  description: string 
  img: string 
  price: number
  category_id: number
  subCategory_id: number
}

export interface DeactivateProductDto {
  id: number
  active: boolean
}

