export interface Product {
  id: string
  name: string
  description: string
  image: string
  price: number
}

export interface CartItem extends Product {
  quantity: number
}