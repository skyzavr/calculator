import classes from './progressBar.module.css';
import { FC } from 'react';
type Props = {
  page: number;
  pages: number;
};
const ProgressBar: FC<Props> = ({ page, pages }) => {
  const array = new Array(pages).fill(0);
  return (
    <section className={classes.wrapper}>
      {array.map((_, ind) => (
        <div
          className={ind <= page ? classes['stadia'] : classes['default']}
          key={ind}
        ></div>
      ))}
    </section>
  );
};
export default ProgressBar;
