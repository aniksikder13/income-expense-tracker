import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <ul>
            <li>
                <NavLink to='/income-tracker' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    Income
                </NavLink>
            </li>
            <li>
                <NavLink to='/expense-tracker' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    Expense
                </NavLink>
            </li>
        </ul>
    </header>
  )
}
