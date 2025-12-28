const { Income, Expense } = require('./IncomeExpense');
const fs = require('fs');

class Note {
    // constructor(list) {
    //     this.list = list || [];
    // }

    // addIncome(name, total) {
    //     let income = new Income(name,total,'income');
    //     this.list.push(income)
    // }
    // addExpense(name, total) {
    //     let expense = new Expense(name, total, 'expense');
    //     this.list.push(expense)
    // }
    // listIncomes() {
    //     console.log("List Income : ");
    //     this.list.forEach(inc => {
    //         if(inc.category === 'income'){
    //             console.log(`${inc.name}, Rp. ${inc.total}`)
    //         }
    //     });
    // }
    // listExpenses() {
    //     console.log("List Expense: ");
    //     this.list.forEach(inc => {
    //         if(inc.category === 'expense'){
    //             console.log(`${inc.name}, Rp. ${inc.total}`)
    //         }
    //     });
    // }
    // balence() {
    //     let totalIncome = 0;
    //     let totalExpense = 0;
    //     this.list.forEach(el => {
    //         if(el.category === 'income'){
    //             totalIncome += el.total;
    //         } else if(el.category === 'expense'){
    //             totalExpense += el.total;
    //         }
    //     })

    
    // }

    static listIncome(){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf-8'));
        let incomes = temp.incomes
        console.log("List Income : ");
        incomes.forEach(income => {
            const { name, total } = income;
            console.log(`${name}, Rp. ${total}`);
        })
    }

    static listExpense(){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf-8'));
        let expenses = temp.expenses
        console.log("List Expense : ");
        expenses.forEach(expense => {
            const { name, total } = expense;
            console.log(`${name}, Rp. ${total}`);
        })
    }

    static addIncome(name, total){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf-8'));
        let income = new Income(name, total,
        'income');
        temp.incomes.push(income)
        // console.log(temp)
        this.save(temp);
    }
     static addExpense(name, total){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf-8'));
        let expense = new Expense(name, total,
        'expense');
        temp.expenses.push(expense)
        // console.log(temp)
        this.save(temp);
    }

    static balance(){
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
        let totalIncome = 0;
        let totalExpense = 0;
        temp.incomes.forEach(income => {
            totalIncome += income.total;
        })
         temp.expenses.forEach(expense => {
            totalExpense += expense.total;
        })
            // Status: plus , minus , balanced
        let total = totalIncome - totalExpense;
        if(total === 0){
            console.log("Status: balanced!")
        } else if(total < 0){
            console.log("Status: minus!")
        } else if (total > 0){
            console.log("Status: plus!")
        }
        // console.log(totalIncome, totalExpense);
    }

    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3));
    }
}

module.exports = Note;