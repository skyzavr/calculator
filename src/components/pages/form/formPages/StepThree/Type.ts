export type Props = {
  init: number | null;
  onUpdateDatas: (isValidate: boolean, type: string[], data: string[]) => void;
};

export type CallBack = (value: string, ind: number) => void;
