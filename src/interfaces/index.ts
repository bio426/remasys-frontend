export interface IProduct {
  id: string
  name: string
  description: string
  image: string
  price: number
}

export interface ICartItem extends IProduct {
  quantity: number
}