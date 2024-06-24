import { useState } from 'react'
import Fields from './components/Fields'
import Result from './components/Result'
import { calculateInvestmentResults } from './util/investment'

const fields = [
  { id: 'initialInvestment', label: 'Initial Investment', value: null },
  { id: 'annualInvestment', label: 'Annual Investment', value: null },
  { id: 'expectedReturn', label: 'Expected Return', value: null },
  { id: 'duration', label: 'Duration', value: null },
]

function App() {
  const [annualData, setAnnualData] = useState([])
  const [userInvestmentValues, setUserInvestmentValues] = useState(fields)

  function handleInvestmentChange(event) {
    const currentData = [...userInvestmentValues]

    for (const [index, field] of currentData.entries()) {
      if (event.target.id === field.id) {
        currentData[index].value = event.target.value
      }
    }

    setUserInvestmentValues(currentData)

    const values = currentData.reduce((prev, curr) => {
      prev.push(curr.value)
      return prev
    }, [])

    const [ initialInvestment, annualInvestment, expectedReturn, duration ] =
      values
      
    const newAnnualData = calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    })

    console.log(newAnnualData)

    setAnnualData(newAnnualData)
  }

  return (
    <div>
      <header id="header">
        <img src="investment-calculator-logo.png" />
        <h1>React Investment Calculator</h1>
      </header>
      <Fields formFields={fields} onChange={handleInvestmentChange} />
      <Result data={annualData} />
    </div>
  )
}

export default App
