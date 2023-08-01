import { FormDatas } from '../../TypeForm';
export type Props = {
  formData: FormDatas;
  len: number;
  onSetData: (data: FormDatas) => void;
  isValideData: boolean;
  handlerFunc: HandlerF;
};
export type HandlerF = {
  page: number;
  next: () => void;
  back: () => void;
  startAgain: () => void;
};
export type Dict = string[];
