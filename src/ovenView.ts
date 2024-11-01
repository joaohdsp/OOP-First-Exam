import { Oven } from "./Oven";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const iptModel = document.getElementById("iptModel") as HTMLInputElement;
const iptFees = document.getElementById("iptFees") as HTMLInputElement;
const iptVoltage = document.getElementById("iptVoltage") as HTMLInputElement;
const iptDoors = document.getElementById("iptDoors") as HTMLInputElement;
const tblOven = document.getElementById("tblOven") as HTMLInputElement;

const ovens: Oven[] = [];

function saveOven() {
  const oven = new Oven(iptModel.value);
  oven.setVoltage(Number(iptVoltage?.value));
  try {
    oven.setDoors(Number(iptDoors?.value));
  } catch (error) {
    console.error("O número de portas precisa ser no mínimo 1");
    alert("O número de portas precisa ser no mínimo 1");
    throw new Error("O número de portas precisa ser no mínimo 1");
  }
  try {
    oven.setFees(Number(iptFees?.value));
  } catch (error) {
    console.error("O número de juros não pode ser maior que 65");
    alert("O número de juros não pode ser maior que 65");
    throw new Error("O número de juros não pode ser maior que 65");
  }
  ovens.push(oven);
}

function listOven() {
  tblOven.innerHTML = "";

  for (let oven of ovens) {
    tblOven.innerHTML += `
        <tr>
          <td>${oven.getModel()}</td>
          <td>${oven.getVoltage()}</td>
          <td>${oven.getFees()}</td>
          <td>${oven.getDoors()}</td>
        </tr>
    `;
  }
}

btnSave?.addEventListener("click", saveOven);
btnList?.addEventListener("click", listOven);
