export type CalcRate = ({ ...FormData }) => [number, number];
export type Props = { formData: FormData };
type FormData = {
  gender: number;
  age: number;
  activity: string;
  weight: number;
  height: number;
};
