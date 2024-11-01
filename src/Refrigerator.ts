import { Products } from "./Products";

export class Refrigerator extends Products {
  private weight: number = 0;

  constructor(model: string) {
    super(model);
  }

  setWeight(weight: number) {
    this.weight = weight;
  }

  getWeight() {
    return this.weight;
  }

}
