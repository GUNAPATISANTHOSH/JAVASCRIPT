let addBtn = document.getElementById("addBtn");
let expenseList = document.getElementById("expenseList");
let total = document.getElementById("total");
let entries = document.getElementById("entries");
let highestExpenseElement =
    document.getElementById("highestExpense");

let spentElement =
    document.getElementById("spent");

let budgetElement =
    document.getElementById("budget");

let remainingElement =
    document.getElementById("remaining");

let saveBudgetBtn =
    document.getElementById("saveBudgetBtn");

let budgetInput =
    document.getElementById("budgetInput");

let selectedMonth =
    document.getElementById("selectedMonth");

let search =
    document.getElementById("search");

let startDate =
    document.getElementById("startDate");

let endDate =
    document.getElementById("endDate");

let clearFilter =
    document.getElementById("clearFilter");

let category =
    document.getElementById("category");

let sortOption =
    document.getElementById("sortOption");

let expenses =
    JSON.parse(localStorage.getItem("expenses"))
    || [];

let categories =
    JSON.parse(localStorage.getItem("categories"))
    || ["Food","Travel","Shopping","Bills","Others"];

let monthlyBudgets =
    JSON.parse(localStorage.getItem("monthlyBudgets"))
    || {};

let editIndex = -1;

// Current Month Default
if(selectedMonth){
    selectedMonth.value =
        new Date().toISOString().slice(0,7);
}

// Save Expenses
function saveExpenses(){
    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}

// Render Categories
function renderCategories(){

    category.innerHTML = "";

    categories.forEach(function(cat){

        let option =
            document.createElement("option");

        option.value = cat;
        option.textContent = cat;

        category.appendChild(option);
    });

    let addOption =
        document.createElement("option");

    addOption.value = "add_new";
    addOption.textContent =
        "+ Add New Category";

    category.appendChild(addOption);
}

// Category Creation
category.addEventListener(
    "change",
    function(){

        if(category.value === "add_new"){

            let newCat =
                prompt(
                    "Enter new category name:"
                );

            if(
                newCat &&
                newCat.trim() !== "" &&
                !categories.includes(
                    newCat.trim()
                )
            ){

                categories.push(
                    newCat.trim()
                );

                localStorage.setItem(
                    "categories",
                    JSON.stringify(categories)
                );

                renderCategories();

                category.value =
                    newCat.trim();
            }
            else{
                category.value =
                    categories[0];
            }
        }
    }
);

// Update Monthly Dashboard
function updateMonthlySummary(){

    let month =
        selectedMonth.value;

    let monthlyBudget =
        monthlyBudgets[month] || 0;

    let monthlyExpenses =
        expenses.filter(function(expense){

            return expense.date.startsWith(month);

        });

    let monthlySpent =
        monthlyExpenses.reduce(
            function(sum, expense){

                return sum +
                    Number(expense.amount);

            },
            0
        );

    let highestExpense = 0;

    monthlyExpenses.forEach(
        function(expense){

            if(
                Number(expense.amount)
                > highestExpense
            ){
                highestExpense =
                    Number(expense.amount);
            }

        }
    );

    budgetElement.textContent =
        monthlyBudget.toFixed(2);

    spentElement.textContent =
        monthlySpent.toFixed(2);

    remainingElement.textContent =
        (monthlyBudget - monthlySpent).toFixed(2);

    highestExpenseElement.textContent =
        highestExpense.toFixed(2);
}

// Display Expenses
function displayExpenses(){

    expenseList.innerHTML = "";

    let searchValue =
        search.value.toLowerCase();

    let displayData = [...expenses];

    // Filter by selected month
    if(selectedMonth.value !== ""){

        displayData =
            displayData.filter(function(expense){

                return expense.date.startsWith(
                    selectedMonth.value
                );

            });
    }

    // Sorting
    switch(sortOption.value){

        case "amountAsc":
            displayData.sort(
                (a,b)=>
                Number(a.amount)
                - Number(b.amount)
            );
            break;

        case "amountDesc":
            displayData.sort(
                (a,b)=>
                Number(b.amount)
                - Number(a.amount)
            );
            break;

        case "dateAsc":
            displayData.sort(
                (a,b)=>
                new Date(a.date)
                - new Date(b.date)
            );
            break;

        case "dateDesc":
            displayData.sort(
                (a,b)=>
                new Date(b.date)
                - new Date(a.date)
            );
            break;
    }

    let filteredExpenses = [];

    displayData.forEach(function(expense){

        let matchesSearch =
            expense.description
            .toLowerCase()
            .includes(searchValue);

        let matchesStartDate =
            startDate.value === ""
            ||
            expense.date >=
            startDate.value;

        let matchesEndDate =
            endDate.value === ""
            ||
            expense.date <=
            endDate.value;

        if(
            !matchesSearch ||
            !matchesStartDate ||
            !matchesEndDate
        ){
            return;
        }

        filteredExpenses.push(expense);

        let originalIndex =
            expenses.indexOf(expense);

        let row =
            document.createElement("tr");

        row.innerHTML = `
            <td><strong>₹${Number(expense.amount).toFixed(2)}</strong></td>
            <td><span class="category-badge">${expense.category}</span></td>
            <td>${expense.description}</td>
            <td>${expense.date}</td>
            <td>
                <div class="action-buttons">
                    <button class="edit-btn" onclick="editExpense(${originalIndex})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="delete-btn" onclick="deleteExpense(${originalIndex})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </td>
        `;

        expenseList.appendChild(row);

    });

    // Show empty state if no expenses
    if(filteredExpenses.length === 0 && selectedMonth.value !== ""){
        let emptyRow = document.createElement("tr");
        emptyRow.className = "empty-state";
        emptyRow.innerHTML = `
            <td colspan="5">
                <i class="fas fa-inbox"></i>
                <p>No expenses found for this period.</p>
            </td>
        `;
        expenseList.appendChild(emptyRow);
    }

    let totalExpense =
        filteredExpenses.reduce(
            function(sum, expense){

                return sum +
                    Number(expense.amount);

            },
            0
        );

    total.textContent =
        totalExpense.toFixed(2);

    entries.textContent =
        filteredExpenses.length;

    updateMonthlySummary();
}

// Save Monthly Budget
saveBudgetBtn.addEventListener(
    "click",
    function(){

        if(
            selectedMonth.value === ""
        ){
            alert(
                "Select a month first"
            );
            return;
        }

        let budget =
            Number(
                budgetInput.value
            );

        monthlyBudgets[
            selectedMonth.value
        ] = budget;

        localStorage.setItem(
            "monthlyBudgets",
            JSON.stringify(
                monthlyBudgets
            )
        );

        updateMonthlySummary();

        budgetInput.value = "";
    }
);

// Add Expense
addBtn.addEventListener(
    "click",
    function(){

        let amount =
            document.getElementById(
                "amount"
            ).value;

        let description =
            document.getElementById(
                "description"
            ).value;

        let date =
            document.getElementById(
                "date"
            ).value;

        if(
            amount === "" ||
            description === "" ||
            date === ""
        ){
            alert(
                "Fill all fields"
            );
            return;
        }

        let expense = {
            amount,
            category: category.value,
            description,
            date
        };

        if(editIndex === -1){

            expenses.push(expense);

        }else{

            expenses[editIndex] =
                expense;

            editIndex = -1;
        }

        saveExpenses();
        displayExpenses();

        document.getElementById(
            "amount"
        ).value = "";

        document.getElementById(
            "description"
        ).value = "";

        document.getElementById(
            "date"
        ).value = "";
    }
);

// Edit Expense
function editExpense(index){

    let expense =
        expenses[index];

    document.getElementById(
        "amount"
    ).value =
        expense.amount;

    category.value =
        expense.category;

    document.getElementById(
        "description"
    ).value =
        expense.description;

    document.getElementById(
        "date"
    ).value =
        expense.date;

    editIndex = index;
}

// Delete Expense
function deleteExpense(index){

    expenses.splice(index,1);

    saveExpenses();

    displayExpenses();
}

// Events
search.addEventListener(
    "input",
    displayExpenses
);

startDate.addEventListener(
    "change",
    displayExpenses
);

endDate.addEventListener(
    "change",
    displayExpenses
);

sortOption.addEventListener(
    "change",
    displayExpenses
);

selectedMonth.addEventListener(
    "change",
    function(){

        displayExpenses();
        updateMonthlySummary();

    }
);

clearFilter.addEventListener(
    "click",
    function(){

        startDate.value = "";
        endDate.value = "";
        search.value = "";
        sortOption.value =
            "default";

        displayExpenses();
    }
);

// Initial Load
renderCategories();
displayExpenses();
updateMonthlySummary();

