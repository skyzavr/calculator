import classes from './menuDescription.module.css';
import { FC } from 'react';
const Description: FC = () => {
  const steps = [
    'Specify your gender',
    'Enter your age, weight and height',
    'Specify the current activity',
  ];
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Calorie Calculator</div>
      <div className={classes.description}>
        Calculate your calorie rate and the body mass index (BMI):
      </div>
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
