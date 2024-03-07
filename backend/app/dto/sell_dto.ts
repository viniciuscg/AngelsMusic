export interface SellDto {
  id: number
  price: number
  userId: number
  status: number 
}

export interface CreateSellDto {
  price: number
  userId: number
  quantity: number
}

export interface UpdateSellDto {
  status: number 
}

export interface GetSellDto {
  id: number 
}