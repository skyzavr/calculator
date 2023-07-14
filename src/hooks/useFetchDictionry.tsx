import { useState, useEffect, useContext, useCallback } from 'react';
import { LangContextType, LangContext } from '@context/LangContext';
type Unknown = Record<string, null>;
type ApiResponse = {
  dict: Unknown | unknown;
  isLoading: boolean;
  error: string | null | unknown;
  isError: boolean;
};
export const useFetchDictionary = (): ApiResponse => {
  const { lang } = useContext(LangContext) as LangContextType;

  const [error, setError] = useState<string | null | unknown>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dict, setDict] = useState<Unknown | unknown>(null);

  const fetchData = useCallback(async () => {
    const path = `src/assets/dictionary${lang === 'en' ? 'En' : 'Ru'}.json`;
    setError(null);
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`Some error`);
      const data = (await response.json()) as Unknown;
      setDict(data);
    } catch (err) {
      const error = err as Unknown;

      setIsError(true);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [lang]);
  useEffect(() => {
    fetchData();
  }, [lang]);
  return { dict, isLoading, error, isError };
};
