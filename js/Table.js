let originalRandomTable = []; // Salvați valoarea originală a tabloului
const generateButton = document.getElementById("generate-button");
const filterMinRowInput = document.getElementById("filterMinRow");
const filterMaxRowInput = document.getElementById("filterMaxRow");
const applyFilterButton = document.getElementById("apply-filter-button");
const tableBody = document.getElementById("table-body");

generateButton.addEventListener("click", function() {
  // Generăm tabloul cu valori aleatoare (100 de randuri cu 5 coloane)
  originalRandomTable = generateRandomTable(100, 5);

  // Afișăm tabloul în tabel
  displayRandomTable(originalRandomTable);
});

applyFilterButton.addEventListener("click", function() {
  const filterMinRow = parseInt(filterMinRowInput.value);
  const filterMaxRow = parseInt(filterMaxRowInput.value);

  // Aplicăm filtrul pe tabloul original și afișăm valorile în funcție de intervalul specificat
  displayRandomTable(originalRandomTable, filterMinRow, filterMaxRow);
});

function generateRandomTable(numRows, numCols) {
  const table = [];
  for (let i = 0; i < numRows; i++) {
    const row = [i + 1]; // Adăugăm numărul randului
    for (let j = 0; j < numCols; j++) {
      row.push(Math.floor(Math.random() * 100)); // Generăm valori întregi aleatoare de la 0 la 99
    }
    table.push(row);
  }
  return table;
}

function displayRandomTable(randomTable, minRow, maxRow) {
  tableBody.innerHTML = ""; // Golește conținutul tabelului

  for (let i = minRow - 1; i < maxRow; i++) {
    const row = randomTable[i];
    const newRow = document.createElement("tr");

    for (let j = 0; j < row.length; j++) {
      const cell = document.createElement(j === 0 ? "th" : "td"); // Prima coloană va conține numărul randului
      cell.textContent = row[j];
      newRow.appendChild(cell);
    }

    tableBody.appendChild(newRow);
  }
}
