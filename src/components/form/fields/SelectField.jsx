export const SelectField = ({ field }) => {
  return (
    <label className="field">
      <span>{field.label}</span>
      <select name={field.id} defaultValue="">
        <option value="" disabled>
          {field.placeholder || 'Select an option'}
        </option>
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
