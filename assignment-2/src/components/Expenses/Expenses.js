import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2019')

  const saveFilterYear = (year) => {
    setFilterYear(year)
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter
        filterYear={filterYear}
        onChangeFilterYear={saveFilterYear}
      />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  )
}

export default Expenses
