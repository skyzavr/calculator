import { FC } from 'react';
import { CalcRate, Props } from './Type';
import Description from './description/Description';
import TableRate from './tableRate/TableRate';
const CaloriesRate: FC<Props> = ({ formData }) => {
  const calcRate: CalcRate = (args) => {
    const { gender, age, height, weight, activity } = args;
    const metabol = 9.99 * weight + 6.25 * height - 4.92 * age;
    const baseMetab = gender === 0 ? metabol - 161 : metabol + 5;
    return [
      Number(baseMetab.toFixed(0)),
      Number((Number(activity) * baseMetab).toFixed(0)),
    ];
  };
  const [baseMetab, rate] = calcRate({ ...formData });
  return (
    <div>
      <Description baseMetab={baseMetab} CaloriesRate={rate} />
      <TableRate metab={rate} />
    </div>
  );
};
export default CaloriesRate;
