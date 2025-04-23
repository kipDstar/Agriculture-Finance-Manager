import { useState } from 'react';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const [filterCategory, setFilterCategory] = useState('All');

  const totalExpenses = expenses.reduce((sum, exp) => sum + parseFloat(exp.cost), 0);

  
  const filteredExpenses = filterCategory === 'All' 
    ? expenses 
    : expenses.filter(exp => exp.category === filterCategory);

  return (
    <div className="expense-list-container">
      <h3>Expense Records</h3>
      
      <div className="expense-summary">
        <p>Total: ${totalExpenses.toFixed(2)}</p>
        <div className="filter-control">
          <label>Filter by Category:</label>
          <select 
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Supplies">Supplies</option>
            <option value="Equipment">Equipment</option>
            <option value="Labor">Labor</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {filteredExpenses.length === 0 ? (
        <p className="no-expenses">No expenses found</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Category</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.item}</td>
                <td>{expense.category}</td>
                <td>${expense.cost}</td>
                <td>
                  <button 
                    onClick={() => onDeleteExpense(expense.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;