export type Props = {
  init: tNum;
  onUpdateDatas: (
    isValidate: boolean,
    type: string[],
    data: string[] | number[]
  ) => void;
};
export type tNum = Gender | number;
export type Gender = 0 | 1 | -1;
