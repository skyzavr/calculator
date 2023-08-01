import classes from './formButtons.module.css';
import { Props, Dict } from './Type';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/ui/button/Button';
const FormButtons: FC<Props> = (props) => {
  const { formData, len, onSetData, isValideData, handlerFunc } = props;
  const { page, next, back, startAgain } = handlerFunc;
  const navigate = useNavigate();
  const buttons: Dict = ['Back', 'Next', 'Start Again'];
  const onNextHandler = () => {
    if (page === len - 1)
      return navigate('/formResult', { state: { ...formData } });
    next();
  };
  const onBackHandler = () => {
    back();
  };
  const onStartAgain = () => {
    onSetData({
      gender: -1,
      age: null,
      height: null,
      weight: null,
      activity: null,
    });
    startAgain();
  };
  return (
    <div className={classes.btns}>
      <div className={classes.btnWrapper}>
        <Button
          type="none"
          disabled={page === 0 ? true : false}
          onClickHandler={onBackHandler}
        >
          {buttons[0]}
        </Button>
        <Button
          type="filled"
          disabled={!isValideData ? true : false}
          onClickHandler={onNextHandler}
        >
          {buttons[1]}
        </Button>
      </div>
      {page > 0 && (
        <Button type="stroke" onClickHandler={onStartAgain}>
          {buttons[2]}
        </Button>
      )}
    </div>
  );
};
export default FormButtons;
