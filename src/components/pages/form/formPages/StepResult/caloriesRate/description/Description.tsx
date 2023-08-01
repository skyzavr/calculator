import classes from './description.module.css';
import { FC } from 'react';
type Props = { baseMetab: number; CaloriesRate: number };
const Description: FC<Props> = ({ baseMetab, CaloriesRate }) => {
  const values = [baseMetab, CaloriesRate];
  const params = [
    {
      title: 'Your basic metabolism',
      desc: 'These are calories that are burned when you are at rest, and energy is spent on ensuring the processes of respiration, blood circulation, maintaining body temperature, etc.',
    },
    {
      title: 'Your calorie rate',
      desc: "Your calorie rate to maintain weight with current physical activity (you don't lose weight or gain weight)",
    },
  ];

  return (
    <section className={classes.wrapper}>
      {params.map((el, i) => (
        <div className={classes.item} key={i}>
          <div className={classes.itemTitle}>
            <div>{el.title}</div>
            <div>{values[i]}</div>
          </div>
          <div className={classes.itemDesc}>{el.desc}</div>
        </div>
      ))}
    </section>
  );
};
export default Description;
