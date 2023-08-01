import PopUp from '@/ui/popUp/PopUp';
import Description from '../description/MenuDescription';
import ThemeSwitcher from '../themeSwitch/ThemeSwitcher';
import classes from './menuLayout.module.css';
import { FC, memo, useState } from 'react';
import { createPortal } from 'react-dom';
const MenuLayout: FC = memo(() => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const ModalHandler = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      {showModal &&
        createPortal(<PopUp onClose={ModalHandler} />, document.body)}
      <Description />
      <div className={classes.hint} onClick={ModalHandler}>
        How does it work?
      </div>
      <ThemeSwitcher />
    </>
  );
});
export default MenuLayout;
