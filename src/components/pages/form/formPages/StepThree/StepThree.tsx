import classes from './stepThree.module.css';
import { Props, CallBack } from './Type';
import { useState, FC } from 'react';
const StepThree: FC<Props> = ({ init = -1, onUpdateDatas }) => {
  const [currentInd, setCurrentInd] = useState(init);
  const activity = [
    {
      title: '1.200',
      description: 'For the sedentary. Physical activity is minimal',
    },
    {
      title: '1.375',
      description: 'Low activity. Light workouts 1-3 times a week',
    },
    {
      title: '1.550',
      description: 'Moderate activity. Training 3-5 times a week',
    },
    {
      title: '1.725',
      description: 'Moderate activity. Training 3-5 times a week',
    },
    {
      title: '1.900',
      description: 'High activity. Intensive training/other activity',
    },
  ];

  const onUpdateValueHandler: CallBack = (value, ind) => {
    const newInd = currentInd === ind ? -1 : ind;
    setCurrentInd(newInd);
    const isValidData = newInd === -1 ? false : true;
    return onUpdateDatas(isValidData, ['activity'], [value]);
  };
  const curIndClass = (ind: number) => {
    return `${classes.listItem}  ${
      ind === currentInd ? classes['current'] : classes['default']
    }`;
  };
  return (
    <ul className={classes.list}>
      {activity.map(({ title, description }, i) => (
        <div
          className={curIndClass(i)}
          onClick={() => onUpdateValueHandler(title, i)}
          key={Math.floor(Math.random() * 10000)}
        >
          <li>{title}</li>
          <span></span>
          <li>{description}</li>
        </div>
      ))}
    </ul>
  );
};
export default StepThree;
