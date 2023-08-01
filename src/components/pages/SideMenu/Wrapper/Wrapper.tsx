import classes from './wrapper.module.css';
import { FC, ReactNode } from 'react';
type Props = {
  children: ReactNode;
  left: number;
};
const Wrapper: FC<Props> = ({ children, left }) => {
  return (
    <aside className={classes.wrapper} style={{ left: `${left}px`, top: 0 }}>
      <div className={classes.container}>{children}</div>
    </aside>
  );
};
export default Wrapper;
