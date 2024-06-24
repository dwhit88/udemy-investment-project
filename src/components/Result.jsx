const headers = [
  'Year',
  'Investment Value',
  'Interest (Year)',
  'Total Interest',
  'Invested Capital',
]

//TODO: Center text align

export default function Result() {
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
        <tbody></tbody>
      </table>
    </span>
  )
}
