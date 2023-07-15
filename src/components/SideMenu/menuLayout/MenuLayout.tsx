import Description from '../description/MenuDescription';
import LangSwitcher from '../langSwitch/LanguageSwitcher';
import ThemeSwitcher from '../themeSwitch/ThemeSwitcher';
import classes from './menuLayout.module.css';
import { FC, memo } from 'react';

type DictionaryMenu = {
  header: string;
  desc: string;
  hint: string;
  steps: string[];
};
const MenuLayout: FC<DictionaryMenu> = memo(({ header, desc, steps, hint }) => {
  return (
    <>
      <LangSwitcher />
      <Description header={header} desc={desc} steps={steps} />
      <div className={classes.hint}>{hint}</div>
      <ThemeSwitcher />
    </>
  );
});
export default MenuLayout;
