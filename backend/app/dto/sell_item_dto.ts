import { ProductDto } from "./product_dto.js"

export interface SellItemDto {
  id: number
  quantity: number
  productId: number
  sellId: number
}

export type CreateSellItemDto = {
  quantity: number
  productId: number
}[]

export type CalculatedSellItemDto = {
  quantity: number
  product: ProductDto
}[]