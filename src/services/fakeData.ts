import dummy from "../assets/data/fake-products.json"
import { IProduct } from "../interfaces"

class FakeProducts {
  get(): IProduct[] {
    return dummy as IProduct[]
  }
}

export default FakeProducts