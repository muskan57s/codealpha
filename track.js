let expenses =[];
let totalAmount = 0;

const categorySelect = document.getElementById("category-select");
const amount = document.getElementById('amt-input');
const inputDate = document.getElementById('date');
const addBtn = document.getElementById('add-btn');
const expenseTable = document.getElementById('expense-table');
const totalAmountCell = document.getElementById('total-amt');

addBtn.addEventListener('click',function(){
    const category =categorySelect.value;
    const amt = Number(amount.value);
    const date = inputDate.value;
    
    if(category=== ''){
        alert("please select a cattegory");
       return;
    }
    if (isNaN(amt)|| amt <=0){
        alert('please enter a valid amount')
        return;
    }
    if(date === ''){
        alert('please enter date');
         return;
    }
    expenses.push({category,date,amt});

    totalAmount += amt;
    totalAmountCell.textContent = totalAmount;
    

    const newRow =expenseTable.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    
    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('dlt-btn')
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expense.amt;
        totalAmountCell.textContext=totalAmt;

        expenseTable.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContext = expense.category;
    amountCell.textContent = expense.amt;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
 })

 for(const expense of expenses){
    totalAmt +=expense.amt;
    totalAmountCell.textContent = totalAmt;
   const newRow =expenseTable.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell =newRow.insertCell();
    const deleteBtn = document.createElement('button');
   

    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('dlt-btn')
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmt -= expense.amt;
        totalAmountCell.textContext=totalAmount;

        expenseTable.removeChild(newRow);
    });
    categoryCell.textContext = expense.category;
    amountCell.textContent = expense.amt;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

}