import { FC, ReactNode } from 'react';
import classes from './button.module.css';
type Props = {
  children: ReactNode;
  type?: 'filled' | 'none' | 'stroke';
  disabled?: boolean;
  onClickHandler: () => void;
};
const Button: FC<Props> = (props) => {
  const { children, type = 'none', disabled = false, onClickHandler } = props;
  return (
    <button
      className={`${classes.wrapper} ${classes[type]} ${
        disabled ? classes['disabled'] : ''
      }`}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
export default Button;
