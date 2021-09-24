const billAmountValue = document.querySelector("#billAmt");
const receivedAmountValue = document.querySelector("#receivedAmt");
const btnNext = document.querySelector("#btnNext");
const btnCalculate = document.querySelector("#btnCheck");
const Message = document.querySelector("#message");
const Table = document.querySelector("#output-table");
const numberOfNotes = document.querySelectorAll(".no-of-notes");
const ReceivedMSG = document.querySelector("#receivedMsg");

let billAmount = 0;
let receivedAmount = 0;

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

billAmountValue.addEventListener("change", () => {
  billAmount = parseInt(billAmountValue.value, 10);
});

receivedAmountValue.addEventListener("change", () => {
  receivedAmount = parseInt(receivedAmountValue.value, 10);
});

btnNext.addEventListener("click", () => {
  hideErrorMessage();
  if (billAmount > 0) {
    receivedAmountValue.style.display = "block";
    btnCalculate.style.display = "block";
    ReceivedMSG.style.display = "block";
    btnNext.style.display = "none";
  } else {
    showMessage("Bill Amount must be greater than 0");
  }
});

btnCalculate.addEventListener("click", () => {
  hideErrorMessage();
  if (receivedAmount > billAmount && billAmount > 0) {
    Table.style.display = "block";
    let amountToBeReturn = receivedAmount - billAmount;
    calculateNotes(amountToBeReturn);
  } else {
    showMessage(
      "Received Amount must be greater Bill amount or Bill Amount must be greater than 0"
    );
  }
});

function hideErrorMessage() {
  Message.style.display = "none";
}

function showMessage(message) {
  Message.style.display = "block";
  Message.innerText = message;
  Table.style.display = "none";
}

function calculateNotes(amountToBeReturn) {
  for (let i = 0; i <= availableNotes.length; i++) {
    let noOfNOtes = Math.trunc(amountToBeReturn / availableNotes[i]);
    amountToBeReturn %= availableNotes[i];
    numberOfNotes[i].innerText = noOfNOtes;
  }
}
