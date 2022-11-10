import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useReturnToStartPage() {
  const navigate = useNavigate();

  const returnToStartPage = useCallback(() => {
    navigate({ pathname: '/' });
  }, []);

  return { returnToStartPage };
}
