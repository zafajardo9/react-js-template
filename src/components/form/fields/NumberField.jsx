export const NumberField = ({ field }) => {
  return (
    <label className="field">
      <span>{field.label}</span>
      <input type="number" placeholder={field.placeholder} name={field.id} />
    </label>
  )
}
