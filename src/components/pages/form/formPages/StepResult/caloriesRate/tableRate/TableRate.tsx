import classes from './tableRate.module.css';
import { Props } from './Type';
import { FC } from 'react';
import { useWidth } from '@/hooks/useWidth';
import TableRes from './table/Table';
import List from './list/List';
const TableRate: FC<Props> = ({ metab }) => {
  const { width } = useWidth();
  const listHeader = ['Percent', 'Ckal', 'Speed', 'Details'];
  const CkalPerMonth = metab * 4 * 7;
  const list = [
    {
      perc: 5,
      ccal: metab * 0.95,
      cpm: metab * 0.95 * 4 * 7,
      desc: 'Slow weight loss',
    },
    {
      perc: 10,
      ccal: metab * 0.9,
      cpm: metab * 0.9 * 4 * 7,
      desc: 'Optimal deficit level',
    },
    {
      perc: 15,
      ccal: metab * 0.85,
      cpm: metab * 0.85 * 4 * 7,
      desc: 'Optimal deficit level',
    },
    {
      perc: 20,
      ccal: metab * 0.8,
      cpm: metab * 0.8 * 4 * 7,
      desc: 'Very fast weight loss',
    },
  ];
  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>Your rate</h2>
      {width < 744 && (
        <List list={list} CkalPerMonth={CkalPerMonth} listHeader={listHeader} />
      )}
      {width >= 744 && (
        <TableRes
          list={list}
          CkalPerMonth={CkalPerMonth}
          listHeader={listHeader}
        />
      )}
    </section>
  );
};
export default TableRate;
