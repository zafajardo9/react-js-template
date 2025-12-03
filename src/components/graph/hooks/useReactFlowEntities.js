import { useMemo } from 'react';

export const useReactFlowEntities = (entities = []) => {
  return useMemo(() => {
    const nodes = entities.map((entity, index) => ({
      id: entity.id,
      data: { label: entity.name },
      position: { x: index * 200, y: 0 },
    }));

    const edges = entities
      .flatMap((entity) =>
        entity.fields
          .filter((field) => field.linkedEntity)
          .map((field) => ({ id: `${entity.id}-${field.linkedEntity}-${field.id}`, source: entity.id, target: field.linkedEntity }))
      )
      .filter(Boolean);

    return { nodes, edges };
  }, [entities]);
};
