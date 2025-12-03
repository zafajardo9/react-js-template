export const EntityGraph = ({ schema, onSelectEntity }) => {
  if (!schema?.entities) {
    return <div>No graph data.</div>;
  }

  return (
    <div className="entity-graph">
      <h2>Entity Graph (ReactFlow placeholder)</h2>
      <ul>
        {schema.entities.map((entity) => (
          <li key={entity.id}>
            <button type="button" onClick={() => onSelectEntity(entity.id)}>
              {entity.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
