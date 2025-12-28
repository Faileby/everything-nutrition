const fruits = [
  { name: "Apfel", kcal: 52, carbs: 14, sugar: 10, fiber: 2.4, protein: 0.3 },
  { name: "Banane", kcal: 89, carbs: 23, sugar: 12, fiber: 2.6, protein: 1.1 }
];

const vegetables = [
  { name: "Karotte", kcal: 41, carbs: 10, sugar: 4.7, fiber: 2.8, protein: 0.9 },
  { name: "Brokkoli", kcal: 34, carbs: 7, sugar: 1.7, fiber: 2.6, protein: 2.8 }
];

let currentData = fruits;

const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
const searchInput = document.getElementById("search");

function renderTable(data) {
  tableHead.innerHTML = `
    <tr>
      <th>Name</th>
      <th>kcal</th>
      <th>Kohlenhydrate</th>
      <th>Zucker</th>
      <th>Ballaststoffe</th>
      <th>Protein</th>
    </tr>
  `;

  tableBody.innerHTML = "";

  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.kcal}</td>
      <td>${item.carbs}</td>
      <td>${item.sugar}</td>
      <td>${item.fiber}</td>
      <td>${item.protein}</td>
    `;
    tableBody.appendChild(row);
  });
}

document.getElementById("btn-fruit").onclick = () => {
  currentData = fruits;
  renderTable(currentData);
};

document.getElementById("btn-veg").onclick = () => {
  currentData = vegetables;
  renderTable(currentData);
};

searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = currentData.filter(item =>
    item.name.toLowerCase().includes(q)
  );
  renderTable(filtered);
});

renderTable(currentData);
