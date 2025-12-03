export const mapEntitiesToGraph = (entities = []) => {
  return entities.map((entity) => ({
    id: entity.id,
    label: entity.name,
  }));
};
