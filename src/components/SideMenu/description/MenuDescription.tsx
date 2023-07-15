import classes from './menuDescription.module.css';
import { FC } from 'react';
type Props = {
  header: string;
  desc: string;
  steps: string[];
};
const Description: FC<Props> = ({ header, desc, steps }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>{header}</div>
      <div className={classes.description}>{desc}</div>
      <div className={classes.steps}>
        {steps.map((el, ind) => (
          <div key={el} className={classes.step}>
            <div>{ind + 1} </div> <div> {el}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Description;
