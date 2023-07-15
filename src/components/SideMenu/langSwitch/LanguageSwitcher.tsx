import { LangContextType, LangContext } from '@context/LangContext';
import classes from './languageSwitcher.module.css';
import { useContext, FC } from 'react';

const LangSwitcher: FC = () => {
  const { lang, setLang } = useContext(LangContext) as LangContextType;
  const switchLangHandler = (lang: string): void => {
    setLang(lang);
    localStorage.setItem('lang', lang);
  };
  return (
    <div className={classes.wrapper}>
      <div
        className={`${classes.item} ${lang === 'ru' ? classes['current'] : ''}`}
        onClick={() => switchLangHandler('ru')}
      >
        Ру
      </div>
      <div
        className={`${classes.item} ${lang === 'en' ? classes['current'] : ''}`}
        onClick={() => switchLangHandler('en')}
      >
        En
      </div>
    </div>
  );
};
export default LangSwitcher;
