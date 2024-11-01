export abstract class Products {
    protected model: string;
    protected voltage?: number;
    protected doors?: number;
  
    constructor(model: string) {
      if (model.length <= 0) {
        alert("O campo modelo é obrigatório");
        throw new Error("O campo modelo é obrigatório");
        alert("O modelo deve ter 4 caracteres no mínimo");
        throw new Error("O modelo deve ter 4 caracteres no mínimo");
      } else if (model.length < 4) {
        alert("O modelo deve ter 4 caracteres no mínimo");
        throw new Error("O modelo deve ter 4 caracteres no mínimo");
      }
      this.model = model;
    }
  
    getModel(): string {
      return this.model;
    }
  
    setVoltage(voltage: number) {
      this.voltage = voltage;
    }
    getVoltage() {
      return this.voltage;
    }
  
    setDoors(doors: number) {
      if (doors < 1) {
        alert("O número de portas precisa ser no mínimo 1");
        throw new Error("O número de portas precisa ser no mínimo 1");
      }
      this.doors = doors;
    }
    getDoors() {
      return this.doors;
    }
  }
  