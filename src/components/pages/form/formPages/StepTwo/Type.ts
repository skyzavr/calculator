export type Props = {
  init: (number | null)[];
  onUpdateDatas: (
    isValidate: boolean,
    type: string[],
    data: (number | null)[]
  ) => void;
};
export interface IData {
  [key: string]: number | null;
}
export type CallBack = (
  isValidate: boolean,
  type?: string,
  data?: number
) => void;

export type UpdListF = (
  list: IData,
  type?: string,
  value?: number | number
) => IData;
export type PList = {
  init: number | null;
  min: number;
  max: number;
  type: string;
}[];
