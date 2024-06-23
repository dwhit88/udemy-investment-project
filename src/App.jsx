import Field from './components/Field'
import Result from './components/Result'

const fields = [
  'Initial Investment',
  'Annual Investment',
  'Expected Return',
  'Duration',
]

function App() {
  return (
    <div>
      <header id="header">
        <img src="investment-calculator-logo.png" />
        <h1>React Investment Calculator</h1>
      </header>
      <span className="input-group" id="user-input">
        {fields.map((field) => (
          <Field label={field} />
        ))}
      </span>
      <Result />
    </div>
  )
}

export default App
