import { createContext, useState, ReactNode, FunctionComponent } from 'react';
export type LangContextType = {
  lang: string;
  setLang: (Lang: string) => void;
};
export const LangContext = createContext<LangContextType | null>(null);
type Params = {
  children: ReactNode;
  init: string;
};

const LangContextProvider: FunctionComponent<Params> = ({ children, init }) => {
  const [lang, setLang] = useState<string>(init);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
export default LangContextProvider;
