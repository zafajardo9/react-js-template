export const InputText = ({ field }) => {
  return (
    <label className="field">
      <span>{field.label}</span>
      <input type="text" placeholder={field.placeholder} name={field.id} />
    </label>
  );
};
