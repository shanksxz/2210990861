import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState<Date | null>(null);
  const [expense, setExpense] = useState<{ title: string, amount: number, date: Date | null }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !date) return;
    setExpense((prev) => {
      return [...prev, { title, amount, date }]
    })
    setTitle("");
    setAmount(0);
    setDate(null);
  }

  const deleteAnExpense = (index: number) => {
    setExpense((prev) => {
      return prev.filter((_ele, idx) => idx != index)
    })
  }

  const getTotalAmount = () => {
    let amount = 0;
    expense.forEach((ele) => {
      amount += ele.amount
    })
    return amount;
  }

  return (
    <div className='container'>
      <h1 className='heading'>Add New Expense</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='title'
          value={title}
          type='text'
          name='title'
          placeholder='Expense Title'
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className='amount'
          type="number"
          value={amount}
          name='amount'
          onChange={(e) => setAmount(e.target.valueAsNumber)}
          placeholder='Amount'
        />

        <input
          className='date'
          type='date'
          // value={date}
          onChange={(e) => setDate(e.target.valueAsDate)}
          name='date'
          placeholder='Date of Expense'
        />
        <button type='submit'>
          Add Expense
        </button>
      </form>
      <div className='total'>
        Total Expense: ${getTotalAmount()}
        <span>
          {expense.length} Expense Recorded
        </span>
      </div>
      <div>
        Your Expense
        {expense.length > 0 && expense.map((ele, idx) =>
          <div key={idx} className='expense-card'>
            <div>
              <div>
                <h2>{ele.title}</h2>
                <span>{ele.date?.toDateString()}</span>
              </div>
              <div>{ele.amount}</div>
            </div>
            <button onClick={() => deleteAnExpense(idx)}>Delete</button>
          </div>
        )}
      </div>

    </div>
  )
}

export default App
