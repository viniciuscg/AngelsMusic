export interface ProductDto {
  id: number
  model: string
  quantity: number
  description: string 
  img: string 
  price: number
  active: boolean
}

export interface DeactivateProductDto {
  id: number
  active: boolean
}