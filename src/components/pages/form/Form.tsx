import classes from './form.module.css';
import { FormDatas, UpdDataHandl, updListF } from './TypeForm';
import { useState } from 'react';
import { useForm } from '@/hooks/useForm';
import StepOne from './formPages/StepOne/StepOne';
import StepTwo from './formPages/StepTwo/StepTwo';
import StepThree from './formPages/StepThree/StepThree';
import FormButtons from './formHandlerElem/btns/FormButtons';
import FormHeader from './formHandlerElem/headers/FormHeader';
import ProgressBar from './formHandlerElem/progressBar/ProgressBar';

const Form = () => {
  const [isValideData, setIsValideData] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDatas>({
    gender: -1,
    age: null,
    height: null,
    weight: null,
    activity: null,
  });
  const onUpdateDataHandler: UpdDataHandl = (isValid, type, data) => {
    setIsValideData(isValid);
    if (!isValid) return;
    setFormData(updateListHandler(type, data));
  };
  const steps = [
    <StepOne init={formData.gender} onUpdateDatas={onUpdateDataHandler} />,
    <StepTwo
      init={[formData.age, formData.height, formData.weight]}
      onUpdateDatas={onUpdateDataHandler}
    />,
    <StepThree init={formData.activity} onUpdateDatas={onUpdateDataHandler} />,
  ];
  const { page, next, back, startAgain } = useForm(0, steps.length);
  const updateListHandler: updListF = (type, data) => {
    const list: FormDatas = { ...formData };
    for (const [key, value] of Object.entries(data)) {
      const ind = type[Number(key)];
      list[ind] = Number(value);
    }
    return list;
  };
  const onSetDataHandler = (data: FormDatas) => {
    setFormData(data);
  };
  return (
    <div className={classes.wrapper}>
      <ProgressBar page={page} pages={steps.length} />
      <FormHeader page={page} />
      {steps[page]}
      <FormButtons
        formData={formData}
        len={steps.length}
        onSetData={onSetDataHandler}
        isValideData={isValideData}
        handlerFunc={{ page, next, back, startAgain }}
      />
    </div>
  );
};
export default Form;
