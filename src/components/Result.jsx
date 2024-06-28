import { formatter } from '../util/investment'

const headers = [
  'Year',
  'Investment Value',
  'Interest (Year)',
  'Total Interest',
  'Invested Capital',
]

export default function Result({ annualData }) {
  const initialInvestment =
    annualData.length == 0
      ? 0
      : annualData[0].valueEndOfYear -
        annualData[0].interest -
        annualData[0].annualInvestment

  return (
    <table id="result">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {annualData.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment

          const totalAmountInvested = item.valueEndOfYear - totalInterest

          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
