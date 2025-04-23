import { useState } from 'react';
import ExpenseForm from './assets/components/ExpenseForm.jsx';
import ExpenseList from './assets/components/ExpenseList.jsx';


function App() {
  const [expenses, setExpenses] = useState([]);

  // Add new expense
  const handleAddExpense = (newExpense) => {
    setExpenses(prev => [...prev, newExpense]);
  };

  // Delete expense
  const handleDeleteExpense = (id) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  return (
    <div className="app">
      <h1>Farm Expense Tracker</h1>
      <div className="expense-tracker">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList 
          expenses={expenses} 
          onDeleteExpense={handleDeleteExpense} 
        />
      </div>
    </div>
  );
}

export default App;