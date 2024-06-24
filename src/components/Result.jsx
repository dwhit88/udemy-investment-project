import { formatter } from '../util/investment'

const headers = [
  'Year',
  'Investment Value',
  'Interest (Year)',
  'Total Interest',
  'Invested Capital',
]

//TODO: Center text align

export default function Result({ data }) {
//   let displayedData = [...data]

//   displayedData.forEach((item) => {
//     item.valueEndOfYear = formatter.format(item.valueEndOfYear)
//     item.annualInvestment = formatter.format(item.annualInvestment)
//     item.interest = formatter.format(item.interest)
//   })

//   console.log(displayedData)

  return (
    <span id="result">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.valueEndOfYear}</td>
              <td>{item.interest}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </span>
  )
}
