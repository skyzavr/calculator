import classes from './sideMenu.module.css';
import { FC, useState, useEffect } from 'react';
import { useWidth } from '@/hooks/useWidth';
import { useFetchDictionary } from '@/hooks/useFetchDictionry';
import { BIG_MENU } from '@/assets/constant';
import MenuLayout from './menuLayout/MenuLayout';
import Wrapper from './Wrapper/Wrapper';
type Params = {
  isMenuOpen: boolean;
};
type DictionaryMenu = {
  header: string;
  btn: string;
  description: string;
  hint: string;
  steps: string[];
};
const SideMenu: FC<Params> = ({ isMenuOpen }) => {
  const { dict, isLoading, isError } = useFetchDictionary();
  const { width } = useWidth();
  const [menuList, setMenuList] = useState<DictionaryMenu | null>(null);
  const [leftPosition, setLeftPosition] = useState<number>(
    width >= BIG_MENU ? 0 : -1
  );
  useEffect(() => {
    const isBig = width >= BIG_MENU;
    const isSmallOpen = isMenuOpen && width < BIG_MENU;
    setLeftPosition(isBig || isSmallOpen ? 0 : -1);
  }, [isMenuOpen, width]);
  useEffect(() => {
    if (dict) {
      setMenuList(dict.menu);
    }
  }, [dict]);

  return (
    <>
      <Wrapper left={leftPosition * width}>
        {isError && (
          <>
            <div className={classes.errorHeader}>Error</div>
            <div className={classes.errorText}>
              There is Error! Do not worry, it is not your fault. We are trying
              to solve this problem
            </div>
          </>
        )}
        {isLoading && (
          <>
            <div className={classes.loadingHeader}>Loading</div>
            <div className={classes.loadingText}>Please, wait!</div>
          </>
        )}
        {menuList && (
          <MenuLayout
            header={menuList.header}
            desc={menuList.description}
            steps={menuList.steps}
            hint={menuList.hint}
          />
        )}
      </Wrapper>
    </>
  );
};
export default SideMenu;
