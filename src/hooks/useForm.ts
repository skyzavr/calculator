import { useState } from 'react';
export const useForm = (init: number, pages: number) => {
  const [page, setPage] = useState<number>(init);
  const next = () => {
    if (page === pages - 1) return;
    setPage((prev) => (prev += 1));
  };
  const back = () => {
    if (page === 0) return;
    setPage((prev) => (prev -= 1));
  };
  const startAgain = () => {
    setPage(0);
  };
  return { page, next, back, startAgain };
};
