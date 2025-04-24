import React, { useState } from 'react';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';

function App() {
  const [incomes, setIncomes] = useState([]);

  const addIncome = (newIncome) => {
    setIncomes([newIncome, ...incomes]);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Income Tracker</h1>
        <p>Track your incomes in one place</p>
      </header>
      <IncomeForm onAddIncome={addIncome} />
      <IncomeList incomes={incomes} />
    </div>
  );
}

export default App;
