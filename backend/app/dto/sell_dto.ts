export interface SellDto {
  id: number
  price: number
  userId: number
  status: number 
}

export interface CreateSellDto {
  userId: number
  items: {
    quantity: number
    productId: number
  }[]
}

export interface UpdateSellDto {
  id: number 
  status: number 
}

export interface GetSellDto {
  id: number 
}

export interface UpdatePriceSellDto {
  id: number
  price: number
}
