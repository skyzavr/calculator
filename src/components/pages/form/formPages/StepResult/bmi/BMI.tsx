import classes from './bmi.module.css';
import { FC } from 'react';
type Data = { weight: number; height: number };
type Props = { data: Data };
interface IDesc {
  [key: string]: { description: string; color: string };
}
const Bmi: FC<Props> = ({ data }) => {
  const { weight, height } = data;
  const desc: IDesc = {
    insuf: { description: 'Insufficient body weight', color: '#FDDA5D' },
    normal: { description: 'Normal body weight', color: '#5DFD80' },
    overWeight: { description: 'Overweight', color: '#FDDA5D' },
    obesityOne: { description: 'Obesity of the 1st degree', color: '#E4C485' },
    obesityTwo: { description: 'Obesity of the 2st degree', color: '#FD5D5D' },
    obesityThree: {
      description: 'Obesity of the 3st degree',
      color: '#FF0000',
    },
  };
  const calculateBmi = (height: number, weight: number): number => {
    const bmi = weight / Math.pow(height / 100, 2);
    return Number(bmi.toFixed(1));
  };
  const calculateDesc = (value: number): string => {
    if (value < 18.4) return 'insuf';
    else if (value < 24.9) return 'normal';
    else if (value < 29.9) return 'overWeight';
    else if (value < 34.9) return 'obesityOne';
    else if (value < 39.9) return 'obesityTwo';
    else return 'obesityThree';
  };
  const bmiValue: number = calculateBmi(height, weight);
  const descParam: string = calculateDesc(bmiValue);
  const { description, color } = desc[descParam];
  return (
    <section className={classes.wrapper}>
      <div style={{ color: color }}> {bmiValue}</div>
      <div> {description}</div>
    </section>
  );
};
export default Bmi;
