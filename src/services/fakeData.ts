import dummy from "../assets/data/fake-products.json"
import { Product } from "../interfaces"

class FakeProducts {
  get(): Product[] {
    return dummy as Product[]
  }
}

export default FakeProducts