import { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    item: '',
    cost: '',
    date: new Date().toISOString().split('T')[0],
    category: 'Supplies'
  });

  const categories = [
    'Supplies', 'Equipment', 'Labor', 
    'Maintenance', 'Utilities', 'Other'
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpense(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    

    if (!expense.item || !expense.cost) {
      alert('Please fill in all required fields');
      return;
    }

    
    const newExpense = {
      id: Date.now(), 
      item: expense.item,
      cost: parseFloat(expense.cost).toFixed(2),
      date: expense.date,
      category: expense.category
    };

   
    onAddExpense(newExpense);

    setExpense({
      item: '',
      cost: '',
      date: new Date().toISOString().split('T')[0],
      category: 'Supplies'
    });
  };

  return (
    <div className="expense-form-container">
      <h2>Track Expenses</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="item">Item/Service*</label>
          <input
            type="text"
            id="item"
            name="item"
            value={expense.item}
            onChange={handleInputChange}
            placeholder="What did you purchase?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cost">Cost ($)*</label>
          <input
            type="number"
            id="cost"
            name="cost"
            value={expense.cost}
            onChange={handleInputChange}
            placeholder="0.00"
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={expense.date}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={expense.category}
            onChange={handleInputChange}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;