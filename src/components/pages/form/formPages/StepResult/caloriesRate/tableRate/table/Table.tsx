import classes from './tableRes.module.css';
import { FC } from 'react';
import { PropsChild } from '../Type';
const TableRes: FC<PropsChild> = ({ list, CkalPerMonth, listHeader }) => {
  return (
    <table>
      <thead className={classes.tHeader}>
        <tr>
          {listHeader.map((el, ind) => (
            <th key={ind}>{el}</th>
          ))}
        </tr>
      </thead>
      <tbody className={classes.tBody}>
        {list.map(({ perc, ccal, cpm, desc }, ind) => (
          <tr key={ind}>
            <td>{perc}%</td>
            <td>{Math.floor(Number(ccal))}</td>
            <td>{((CkalPerMonth - Number(cpm)) / 7000).toFixed(1)}</td>
            <td>{desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableRes;
