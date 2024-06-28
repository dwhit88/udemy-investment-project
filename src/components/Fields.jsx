export default function Fields({ formFields, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        {formFields.map((field) => (
          <label key={field.id}>
            {field.label}
            <input id={field.id} onChange={onChange} type="number" required />
          </label>
        ))}
      </div>
    </section>
  )
}
