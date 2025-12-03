import { FieldRenderer } from './FieldRenderer.jsx';

export const FormGenerator = ({ schema, selectedEntity }) => {
  if (!schema || !schema.entities?.length) {
    return <div>No schema available.</div>;
  }

  const entity = schema.entities.find((item) => item.id === selectedEntity) ?? schema.entities[0];

  if (!entity) {
    return <div>Select an entity to begin.</div>;
  }

  return (
    <div className="form-generator">
      <h2>{entity.name}</h2>
      <form>
        {entity.fields.map((field) => (
          <FieldRenderer key={field.id} field={field} />
        ))}
      </form>
    </div>
  );
};
