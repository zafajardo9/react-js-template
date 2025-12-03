const SCHEMA_ENDPOINT = '/api/schema';

export const fetchSchema = async () => {
  const response = await fetch(SCHEMA_ENDPOINT);

  if (!response.ok) {
    throw new Error('Failed to load schema');
  }

  return response.json();
};
