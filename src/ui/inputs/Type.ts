import { ChangeEvent, KeyboardEvent } from 'react';
export type eChange = ChangeEvent<HTMLInputElement>;
export type Ekey = KeyboardEvent<HTMLInputElement>;
export type PrintF = (list: string[], value: number | string) => string;
export type nestProps = {
  init: number | null;
  min: number;
  max: number;
  type: string;
};
export type Props = {
  val: nestProps;
  title: string[];
  onUpdateValue: (isValidate: boolean, type?: string, data?: number) => void;
};
export interface IError {
  [key: string]: {
    [key: string]: string;
  };
}
