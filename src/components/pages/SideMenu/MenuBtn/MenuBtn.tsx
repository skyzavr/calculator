import classes from './menuBtn.module.css';
import { FC, useState, useEffect } from 'react';
type Params = {
  isMenuOpen: boolean;
  isShowHandler: (data: boolean) => void;
};
const MenuBtn: FC<Params> = ({ isMenuOpen, isShowHandler }) => {
  const [classBtn, setClassBtn] = useState<string>(updateClass());
  function updateClass() {
    return isMenuOpen ? 'open' : 'close';
  }
  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto');
    setClassBtn(updateClass());
  }, [isMenuOpen]);

  const onClickHandler = () => {
    isShowHandler(classBtn === 'open' ? false : true);
    setClassBtn(classBtn === 'open' ? 'close' : 'open');
  };
  return (
    <>
      <div className={classes.wrapper}>
        <button className={`${classes[classBtn]}`} onClick={onClickHandler}>
          <div className={classes.area}>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
          </div>
        </button>
      </div>
    </>
  );
};
export default MenuBtn;
