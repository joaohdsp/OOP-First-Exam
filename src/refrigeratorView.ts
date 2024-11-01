import { Refrigerator } from "./src/Refrigerator";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const iptModel = document.getElementById("iptModel") as HTMLInputElement;
const iptWeight = document.getElementById("iptWeight") as HTMLInputElement;
const iptVoltage = document.getElementById("iptVoltage") as HTMLInputElement;
const iptDoors = document.getElementById("iptDoors") as HTMLInputElement;
const tblRefrigerator = document.getElementById(
  "tblRefrigerator"
) as HTMLInputElement;

const refrigerators: Refrigerator[] = [];

function saveRefrigerators() {
  const refrigerator = new Refrigerator(iptModel.value);
  refrigerator.setVoltage(Number(iptVoltage?.value));
  refrigerator.setWeight(Number(iptWeight?.value));
  try {
    refrigerator.setDoors(Number(iptDoors?.value));
    refrigerators.push(refrigerator);
  } catch (error) {
    console.error("O número de portas precisa ser no mínimo 1");
    alert("O número de portas precisa ser no mínimo 1");
    throw new Error("O número de portas precisa ser no mínimo 1");
  }
}

function listRefrigerator() {
  tblRefrigerator.innerHTML = "";

  for (let refrigerator of refrigerators) {
    tblRefrigerator.innerHTML += `
        <tr>
          <td>${refrigerator.getModel()}</td>
          <td>${refrigerator.getVoltage()}</td>
          <td>${refrigerator.getWeight()}</td>
          <td>${refrigerator.getDoors()}</td>
        </tr>
    `;
  }
}

btnSave?.addEventListener("click", saveRefrigerators);
btnList?.addEventListener("click", listRefrigerator);
