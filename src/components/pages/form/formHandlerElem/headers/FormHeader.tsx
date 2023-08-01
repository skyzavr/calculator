import classes from './formHeader.module.css';
import { Dict, Props } from './Type';
import { FC } from 'react';
const FormHeader: FC<Props> = ({ page }) => {
  const titles: Dict = [
    'Choose your gender',
    'Your parameters',
    'Specify your activity',
  ];
  return (
    <h3 className={classes.title}>
      {page + 1}. {titles[page]}
    </h3>
  );
};
export default FormHeader;
