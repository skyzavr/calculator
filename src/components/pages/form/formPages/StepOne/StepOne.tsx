import classes from './stepOne.module.css';
import { Props, tNum } from './Type';
import { useState, useEffect, FC } from 'react';
import Button from '@/ui/button/Button';
const StepOne: FC<Props> = ({ init, onUpdateDatas }) => {
  const [gender, setGender] = useState<tNum>(init);
  const stepList = ['female', 'male'];

  const onChangeHandler = (ind: tNum, isValid: boolean) => {
    setGender(ind);
    return onUpdateDatas(isValid, ['gender'], [ind]);
  };
  const onChange = (ind: tNum) => {
    if (ind !== gender) return onChangeHandler(ind, true);
    return onChangeHandler(-1, false);
  };
  useEffect(() => {
    if (init !== -1) return onChangeHandler(init, true);
  }, [init]);
  return (
    <section className={classes.container}>
      <label className={classes.label}>
        I'am
        {gender !== -1 && ` ${stepList[gender]}`}
      </label>
      <div className={classes.btnWrapper}>
        {stepList.map((el, ind) => (
          <span
            className={classes[`${ind === gender ? 'curent' : 'default'}`]}
            key={Math.floor(Math.random() * 10000)}
          >
            <Button onClickHandler={() => onChange(ind)}>{el}</Button>
          </span>
        ))}
      </div>
    </section>
  );
};
export default StepOne;
