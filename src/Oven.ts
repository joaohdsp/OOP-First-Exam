import { Products } from "./Products";

export class Oven extends Products {
  private fees: number = 0;

  constructor(model: string) {
    super(model);
  }

  setFees(fees: number) {
    if (fees > 65) {
      alert("Os juros não podem ser maior que 65");
      throw new Error("Os juros não podem ser maior que 65");
    }
    this.fees = fees;
  }

  getFees() {
    return this.fees;
  }
}
