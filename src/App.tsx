import './App.css';
import classes from './app.module.css';
import { useState } from 'react';
import { useWidth } from '@/hooks/useWidth';
import ThemeContextProvider from '@context/ThemeContext';
import LangContextProvider from '@context/LangContext';
import SideMenu from '@components/SideMenu/SideMenu';
import MenuBtn from '@components/SideMenu/MenuBtn/MenuBtn';

const App = () => {
  const { width } = useWidth();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dataMode = (paramName: string, preferedParam: string): string => {
    const isParamExist = localStorage.getItem(paramName);
    return isParamExist || preferedParam;
  };
  const onShowMenuHandler = (data: boolean): void => {
    setIsMenuOpen(data);
  };
  return (
    <LangContextProvider init={dataMode('lang', 'en')}>
      <ThemeContextProvider init={dataMode('theme', 'dark')}>
        <main>
          <MenuBtn
            width={width}
            isMenuOpen={isMenuOpen}
            isShowHandler={onShowMenuHandler}
          />
          <div className={classes.wrapper}>
            <SideMenu isMenuOpen={isMenuOpen} />
          </div>
        </main>
      </ThemeContextProvider>
    </LangContextProvider>
  );
};

export default App;
