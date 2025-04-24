import React, { useState } from 'react';

function IncomeForm({ onAddIncome }) {
  const [formData, setFormData] = useState({
    source: '',
    amount: '',
    date: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newIncome = {
      ...formData,
      amount: parseFloat(formData.amount), // convert to number
      id: Date.now(), // unique ID for tracking
    };

    onAddIncome(newIncome); // Pass the data up
    setFormData({ source: '', amount: '', date: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-xl shadow-md">
      <div>
        <label className="block font-semibold">Source:</label>
        <input
          type="text"
          name="source"
          value={formData.source}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>

      <div>
        <label className="block font-semibold">Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>

      <div>
        <label className="block font-semibold">Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add Income
      </button>
    </form>
  );
}

export default IncomeForm;
