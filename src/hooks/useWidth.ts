import { useState, useEffect } from 'react';
export const useWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const onResizeHandler = (): void => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', onResizeHandler);
    return () => window.removeEventListener('resize', onResizeHandler);
  }, []);
  return { width };
};
