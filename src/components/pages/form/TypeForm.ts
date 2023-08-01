export interface FormDatas {
  gender: 0 | 1 | -1;
  age: number | null;
  height: number | null;
  weight: number | null;
  activity: number | null;
}
export type UpdDataHandl = (
  isValid: boolean,
  type: string[],
  data: (number | null)[] | string[]
) => void;

export type updListF = (
  type: string[],
  data: string[] | (number | null)[]
) => FormDatas;
