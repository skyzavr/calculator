import classes from './popUp.module.css';
import Button from '../button/Button';
import Desc from './desciption/PopUpDesc';
import { FC } from 'react';
type Props = { onClose: () => void };
const PopUp: FC<Props> = ({ onClose }) => {
  const onCLoseHandler = () => {
    onClose();
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.back} onClick={onCLoseHandler}></div>
      <div className={classes.modal}>
        <div className={classes.btn}>
          <Button onClickHandler={onCLoseHandler}>Close</Button>
        </div>
        <h4>CALORIE RATE CALCULATOR</h4>
        <div className={classes.desc}>
          <p>
            We calculate the calorie rate according to the MIFFLIN-SAN GEOR
            formula
          </p>
          <p>
            The formula was developed in 1990 and is considered by far the most
            accurate for calculating daily energy needs
          </p>
        </div>
        <Desc />
      </div>
    </div>
  );
};
export default PopUp;
