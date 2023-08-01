import classes from './formResult.module.css';
import { useState, FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@/ui/button/Button';
import Bmi from './bmi/BMI';
import CaloriesRate from './caloriesRate/CaloriesRate';
import CompState from '@/components/pages/componentState/CompState';
const StepResult: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [curTab, setCurTab] = useState(0);
  const tabBtn = ['Calories rate', 'BMI'];
  const tabs = [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <CaloriesRate formData={location.state} />,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <Bmi data={location.state} />,
  ];
  const updateTab = (ind: number) => {
    setCurTab(ind);
  };
  return (
    <section className={classes.wrapper}>
      {location.state && (
        <>
          <h1 className={classes.title}>Your results</h1>
          <div className={classes.tabs}>
            {tabBtn.map((el, i) => (
              <p
                className={i === curTab ? classes['current'] : ''}
                key={i}
                onClick={() => updateTab(i)}
              >
                {el}
              </p>
            ))}
          </div>
          <div className={classes.container}>{tabs[curTab]}</div>
        </>
      )}
      {!location.state && <CompState isError={true} />}
      <Button onClickHandler={() => navigate('/')}>Home</Button>
    </section>
  );
};
export default StepResult;
