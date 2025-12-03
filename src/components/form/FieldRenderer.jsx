import { InputText } from './fields/InputText.jsx';
import { NumberField } from './fields/NumberField.jsx';
import { SelectField } from './fields/SelectField.jsx';

const componentMap = {
  text: InputText,
  number: NumberField,
  select: SelectField,
};

export const FieldRenderer = ({ field }) => {
  if (!field) return null;

  const Component = componentMap[field.type] ?? InputText;

  return <Component field={field} />;
};
