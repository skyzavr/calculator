type genderParams = 0 | 1 | -1;
interface IObjectKeys {
  [key: string]: number | null | genderParams;
}
export interface FormDatas extends IObjectKeys {
  gender: genderParams;
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
