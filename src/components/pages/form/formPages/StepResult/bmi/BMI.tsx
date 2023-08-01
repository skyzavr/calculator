import classes from './bmi.module.css';
import { FC } from 'react';
type Data = { weight: number; height: number };
type Props = { data: Data };
const Bmi: FC<Props> = ({ data }) => {
  const { weight, height } = data;
  const desc = [
    'Insufficient body weight',
    'Normal body weight',
    'Overweight',
    'Obesity of the 1st degree',
    'Obesity of the 2nd degree',
    'Obesity of the 3rd degree',
  ];
  const colors = [
    '#FDDA5D',
    '#5DFD80',
    '#FDDA5D',
    '#E4C485',
    '#FD5D5D',
    '#FF0000',
  ];
  const calculateBmi = (height: number, weight: number): number => {
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    return Number(bmi);
  };
  const calculateDesc = (value: number): number => {
    if (value < 18.4) return 0;
    else if (value < 24.9) return 1;
    else if (value < 29.9) return 2;
    else if (value < 34.9) return 3;
    else if (value < 39.9) return 4;
    else return 5;
  };
  const bmiValue: number = calculateBmi(height, weight);
  const descParam = calculateDesc(bmiValue);
  return (
    <section className={classes.wrapper}>
      <div style={{ color: colors[descParam] }}> {bmiValue}</div>
      <div> {desc[descParam]}</div>
    </section>
  );
};
export default Bmi;
