import { useEffect, useState } from 'react';
import { fetchSchema } from '../../../bff/schema.js';

export const useSchema = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    fetchSchema()
      .then((response) => {
        if (mounted) {
          setData(response);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (mounted) {
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { data, isLoading, error };
};
