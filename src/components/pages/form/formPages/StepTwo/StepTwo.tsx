import classes from './stepTwo.module.css';
import { Props, IData, CallBack, UpdListF, PList } from './Type';
import { useState, useEffect, FC, Fragment } from 'react';
import NumberField from '@/ui/inputs/NumberField';

const StepTwo: FC<Props> = ({ init, onUpdateDatas }) => {
  const stepList = [
    { paramTitle: ["I'm", 'years old'] },
    { paramTitle: ['My height is', 'cm'] },
    { paramTitle: ['My weight is', 'kg'] },
  ];
  const [dataList, setDataList] = useState<IData>({
    age: init[0],
    height: init[1],
    weight: init[2],
  });
  const paramsList = [
    { init: dataList.age, min: 10, max: 100, type: 'age' },
    { init: dataList.height, min: 130, max: 230, type: 'height' },
    { init: dataList.weight, min: 40, max: 160, type: 'weight' },
  ];
  const [params, setParams] = useState<PList>([...paramsList]);
  const isAllFieldsValide = (list: IData) => {
    for (const val of Object.values(list)) if (!val) return false;
    return true;
  };
  const updateListHand: UpdListF = (list, type, value) => {
    if (!type || !value) return list;
    const newList: IData = { ...list };
    newList[type] = value;
    return newList;
  };
  const onUpdateValueHandler: CallBack = (isValidate, type, data) => {
    if (!isValidate) return onUpdateDatas(false, [''], []);
    const list: IData = updateListHand(dataList, type, data);
    setDataList(list);
    if (!isAllFieldsValide(list)) return;
    return onUpdateDatas(true, Object.keys(list), Object.values(list));
  };
  useEffect(() => {
    if (!isAllFieldsValide(dataList)) return onUpdateDatas(false, [], []);
    return onUpdateDatas(true, Object.keys(dataList), Object.values(dataList));
  }, [dataList]);

  useEffect(() => {
    if (init.some((el) => el === null)) return;
    const [age, height, weight] = init;
    const list = { age: age, height: height, weight: weight };
    const paramArr = [...paramsList];
    type TInd = 'age' | 'weight' | 'height';
    paramArr.map((el) => {
      const ind = el['type'] as TInd;
      el.init = list[ind];
    });
    setDataList(list);
    setParams(paramArr);
  }, []);

  return (
    <section className={classes.wrapper}>
      {params.map((el, ind) => (
        <Fragment key={ind}>
          <NumberField
            val={el}
            title={stepList[ind].paramTitle}
            onUpdateValue={onUpdateValueHandler}
          />
        </Fragment>
      ))}
    </section>
  );
};
export default StepTwo;
