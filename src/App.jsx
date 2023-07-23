import './App.css'
import Income from './pages/Income'
import Expense from './pages/Expense'
import { Routes, Route, Navigate,  } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path='/income-tracker' element={<Income />} />
        <Route path='/expense-tracker' element={<Expense />} />
        <Route path='*' element={<Navigate to='/income-tracker' />} />
      </Routes>
  )
}

export default App