import './App.css';
import { useState } from 'react';
import ThemeContextProvider from '@context/ThemeContext';
import SideMenu from '@pages/SideMenu/SideMenu';
import MenuBtn from '@pages/SideMenu/MenuBtn/MenuBtn';
import MainLayout from './components/pages/mainLayout/MainLayout';

const App = () => {
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
      <SideMenu isMenuOpen={isMenuOpen} />
      <main>
        <MenuBtn isMenuOpen={isMenuOpen} isShowHandler={onShowMenuHandler} />
        <MainLayout />
      </main>
    </ThemeContextProvider>
  );
};

export default App;
