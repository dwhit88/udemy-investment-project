function isFieldCounter(field) {
  return field === 'Duration' ? true : false
}

export default function Fields({ formFields, onChange }) {
  return (
    <span className="input-group" id="user-input">
      {formFields.map((field) => (
        <label key={field.id}>
          {field.label}
          <input id={field.id} onChange={onChange} />
        </label>
      ))}
    </span>
  )
}
