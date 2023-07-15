import classes from './menuBtn.module.css';
import { FC, useState, useEffect } from 'react';
import { BIG_MENU } from '@/assets/constant';
type Params = {
  width: number;
  isMenuOpen: boolean;
  isShowHandler: (data: boolean) => void;
};
const MenuBtn: FC<Params> = ({ width, isMenuOpen, isShowHandler }) => {
  const [classBtn, setClassBtn] = useState<string>(updateClass());
  function updateClass() {
    const isBig = width >= BIG_MENU;
    const isSmallOpen = isMenuOpen && width < BIG_MENU;
    return isBig || isSmallOpen ? 'open' : 'close';
  }
  useEffect(() => {
    setClassBtn(updateClass());
  }, [width, isMenuOpen]);

  const onClickHandler = () => {
    isShowHandler(classBtn === 'open' ? false : true);
    setClassBtn(classBtn === 'open' ? 'close' : 'open');
  };
  return (
    <div className={classes.wrapper}>
      {width < BIG_MENU && (
        <button className={`${classes[classBtn]}`} onClick={onClickHandler}>
          <div className={classes.area}>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
          </div>
        </button>
      )}
    </div>
  );
};
export default MenuBtn;
