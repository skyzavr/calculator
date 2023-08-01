import classes from './list.module.css';
import { FC } from 'react';
import { PropsChild } from '../Type';
const List: FC<PropsChild> = ({ list, CkalPerMonth, listHeader }) => {
  const FAT = 7000;
  const [percentage, rate, speed, more] = listHeader;
  return (
    <ul className={classes.list}>
      {list.map(({ perc, ccal, cpm, desc }, i) => (
        <div className={classes.listItem} key={i}>
          <li>
            <p>{percentage}</p> <p>{perc}%</p>
          </li>
          <li>
            <p>{rate}</p> <p>{Math.floor(Number(ccal))}</p>
          </li>
          <li>
            <p>{speed}</p>
            <p>{((CkalPerMonth - Number(cpm)) / FAT).toFixed(1)}</p>
          </li>
          <li>
            <p>{more}</p> <p>{desc}</p>
          </li>
        </div>
      ))}
    </ul>
  );
};
export default List;
