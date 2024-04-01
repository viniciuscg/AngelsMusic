export interface ISell {
  id: number
  price: number
  userId: number
  status: number 
}

export interface ISellCreate {
  userId: number
  items: {
    quantity: number
    productId: number
  }[]
}

export interface ISellUpdate {
  id: number 
  status: number 
}

export interface ISellGet {
  id: number 
}
