const headers = [
  'Year',
  'Investment Value',
  'Interest (Year)',
  'Total Interest',
  'Invested Capital',
]

export default function Result() {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}
