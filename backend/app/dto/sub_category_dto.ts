export interface SubCategoryDto {
  id: number
  description: string
  categoryId: number
}

export interface CreateSubCategoryDto {
  description: string
  categoryId: number
}

export interface UpdateSubCategoryDto {
  id: number
  description: string
  categoryId: number | null
}