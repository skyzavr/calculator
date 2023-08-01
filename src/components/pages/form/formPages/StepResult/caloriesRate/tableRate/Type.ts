export type Props = { metab: number };
interface IListChild {
  [key: string]: string | number;
}
export type PropsChild = {
  list: Array<IListChild>;
  CkalPerMonth: number;
  listHeader: string[];
};
