import { SplitPanel } from '../../../components/layout/SplitPanel.jsx';
import { EntityGraph } from '../../../components/graph/EntityGraph.jsx';
import { FormGenerator } from '../../../components/form/FormGenerator.jsx';
import { useSchema } from '../../../features/entityExplorer/hooks/useSchema.js';
import { useEntitySelection } from '../../../features/entityExplorer/hooks/useEntitySelection.js';

export const SchemaPage = () => {
  const { data: schema, isLoading } = useSchema();
  const { selectedEntity, selectEntity } = useEntitySelection();

  if (isLoading) {
    return <div>Loading schema...</div>;
  }

  return (
    <SplitPanel
      left={<EntityGraph schema={schema} onSelectEntity={selectEntity} />}
      right={<FormGenerator schema={schema} selectedEntity={selectedEntity} />}
    />
  );
};
