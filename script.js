alert("script.js wird geladen!");
// =====================================================
// 🍎🍅 OBST & GEMÜSE – BEISPIELDATEN
// 👉 HIER FÜGST DU SPÄTER WEITERE EINTRÄGE HINZU
// =====================================================

const foods = [
    {
        name: "Apfel",
        category: "Obst",
        calories: 52,        // kcal pro 100g
        protein: 0.3,        // g
        carbs: 14,           // g
        fat: 0.2,             // g
        fiber: 2.4,          // g
        vitaminC: 4.6,       // mg
        iron: 0.1             // mg
    },
    {
        name: "Banane",
        category: "Obst",
        calories: 89,
        protein: 1.1,
        carbs: 23,
        fat: 0.3,
        fiber: 2.6,
        vitaminC: 8.7,
        iron: 0.3
    },
    {
        name: "Erdbeere",
        category: "Obst",
        calories: 32,
        protein: 0.7,
        carbs: 7.7,
        fat: 0.3,
        fiber: 2.0,
        vitaminC: 58.8,
        iron: 0.4
    },
    {
        name: "Karotte",
        category: "Gemüse",
        calories: 41,
        protein: 0.9,
        carbs: 10,
        fat: 0.2,
        fiber: 2.8,
        vitaminC: 5.9,
        iron: 0.3
    },
    {
        name: "Brokkoli",
        category: "Gemüse",
        calories: 34,
        protein: 2.8,
        carbs: 7,
        fat: 0.4,
        fiber: 2.6,
        vitaminC: 89,
        iron: 0.7
    },
    {
        name: "Spinat",
        category: "Gemüse",
        calories: 23,
        protein: 2.9,
        carbs: 3.6,
        fat: 0.4,
        fiber: 2.2,
        vitaminC: 28,
        iron: 2.7
    }
];

// =====================================================
// 🏆 TIER-ALGORITHMUS (S – F)
// 👉 KANNST DU SPÄTER ANPASSEN
// =====================================================

function calculateTier(food) {
    let score = 0;

    score += food.protein * 2;
    score += food.fiber * 2;
    score += food.vitaminC * 0.1;
    score += food.iron * 1.5;
    score -= food.calories * 0.05;

    if (score >= 30) return "S";
    if (score >= 22) return "A";
    if (score >= 16) return "B";
    if (score >= 10) return "C";
    if (score >= 5) return "D";
    return "F";
}

// =====================================================
// 📊 TABELLE & DROPDOWNS BEFÜLLEN
// =====================================================

const tableBody = document.querySelector("#nutritionTable tbody");
const selectA = document.getElementById("compareA");
const selectB = document.getElementById("compareB");

foods.forEach(food => {
    const tier = calculateTier(food);

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${food.name}</td>
        <td>${food.category}</td>
        <td>${food.calories}</td>
        <td>${food.protein}</td>
        <td>${food.carbs}</td>
        <td>${food.fat}</td>
        <td>${food.fiber}</td>
        <td>${food.vitaminC}</td>
        <td>${food.iron}</td>
        <td><strong>${tier}</strong></td>
    `;
    tableBody.appendChild(row);

    selectA.innerHTML += `<option value="${food.name}">${food.name}</option>`;
    selectB.innerHTML += `<option value="${food.name}">${food.name}</option>`;
});

// =====================================================
// 🔍 VERGLEICHSFUNKTION
// =====================================================

function compareItems() {
    const foodA = foods.find(f => f.name === selectA.value);
    const foodB = foods.find(f => f.name === selectB.value);

    let result = `Vergleich:\n\n`;

    result += `${foodA.name} vs ${foodB.name}\n`;
    result += "---------------------------\n";

    for (let key in foodA) {
        if (key !== "name" && key !== "category") {
            result += `${key}: ${foodA[key]}  |  ${foodB[key]}\n`;
        }
    }

    document.getElementById("compareResult").textContent = result;
}

