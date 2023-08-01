import './App.css';
import classes from './app.module.css';
import { useState } from 'react';
import { useWidth } from '@/hooks/useWidth';
import ThemeContextProvider from '@context/ThemeContext';
import SideMenu from '@pages/SideMenu/SideMenu';
import MenuBtn from '@pages/SideMenu/MenuBtn/MenuBtn';
import MainLayout from './components/pages/mainLayout/MainLayout';

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
    <ThemeContextProvider init={dataMode('theme', 'dark')}>
      <main>
        <MenuBtn
          width={width}
          isMenuOpen={isMenuOpen}
          isShowHandler={onShowMenuHandler}
        />
        <section className={classes.wrapper}>
          <SideMenu isMenuOpen={isMenuOpen} />
          <MainLayout />
        </section>
      </main>
    </ThemeContextProvider>
  );
};

export default App;
