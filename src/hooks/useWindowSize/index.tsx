import { useState, useEffect } from 'react';

type Size = {
  width?: number;
  height?: number;
}

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState({} as Size);

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
