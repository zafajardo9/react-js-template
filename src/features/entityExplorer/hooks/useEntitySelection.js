import { useState } from 'react';

export const useEntitySelection = () => {
  const [selectedEntity, setSelectedEntity] = useState(null);

  return {
    selectedEntity,
    selectEntity: setSelectedEntity,
  };
};
