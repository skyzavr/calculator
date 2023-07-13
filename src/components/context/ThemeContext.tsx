import { createContext, useState, ReactNode, FunctionComponent } from 'react';
export type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};
export const ThemeContext = createContext<ThemeContextType | null>(null);
type Params = {
  children: ReactNode;
  init: string;
};

const ThemeContextProvider: FunctionComponent<Params> = ({
  children,
  init,
}) => {
  const [theme, setTheme] = useState<string>(init);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
