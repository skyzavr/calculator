import classes from './wrapper.module.css';
import { FC, ReactNode } from 'react';
type Props = {
  children: ReactNode;
  left: number;
};
const Wrapper: FC<Props> = ({ children, left }) => {
  return (
    <div className={classes.wrapper} style={{ left: `${left}px` }}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};
export default Wrapper;
