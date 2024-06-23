function isFieldCounter(field) {
  return field === 'Duration' ? true : false
}

export default function Field({ label, value }) {
  return (
    <div>
      <label>
        {label}
        <input />
      </label>
    </div>
  )
}
