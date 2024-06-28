import { useState } from 'react'
import Fields from './components/Fields'
import Result from './components/Result'
import { calculateInvestmentResults } from './util/investment'

const fields = [
  { id: 'initialInvestment', label: 'Initial Investment', value: 0 },
  { id: 'annualInvestment', label: 'Annual Investment', value: 0 },
  { id: 'expectedReturn', label: 'Expected Return', value: 0 },
  { id: 'duration', label: 'Duration', value: 0 },
]

function hasValidInput(currentData) {
  return currentData.find((item) => item.id == 'duration')?.value > 0
}

function hasDefaultValues(currentData) {
  return currentData.every((item) => item.value == 0)
}

function App() {
  const [annualData, setAnnualData] = useState([])
  const [userInvestmentValues, setUserInvestmentValues] = useState(fields)

  function handleInvestmentChange(event) {
    const currentData = [...userInvestmentValues]

    for (const [index, field] of currentData.entries()) {
      if (event.target.id === field.id) {
        currentData[index].value = +event.target.value
      }
    }

    setUserInvestmentValues(currentData)
    if (!hasValidInput(currentData)) return

    const readyToCalc = currentData.every((item) => item.value)

    if (readyToCalc) {
      let data = {}

      for (const field of fields) {
        data[field.id] = field.value
      }

      const newAnnualData = calculateInvestmentResults(data)
      setAnnualData(newAnnualData)
    }
  }

  return (
    <div>
      <header id="header">
        <img src="investment-calculator-logo.png" />
        <h1>React Investment Calculator</h1>
      </header>
      <Fields formFields={fields} onChange={handleInvestmentChange} />
      {hasDefaultValues(userInvestmentValues) ? null : hasValidInput(
          userInvestmentValues
        ) ? (
        <Result annualData={annualData} />
      ) : (
        <p className="center">Please make sure you have valid inputs!</p>
      )}
    </div>
  )
}

export default App
