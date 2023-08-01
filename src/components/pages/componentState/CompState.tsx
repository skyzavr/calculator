import classes from './compState.module.css';
import { FC } from 'react';
type Props = {
  isError: boolean;
};
const CompState: FC<Props> = ({ isError }) => {
  return (
    <>
      {isError && (
        <div>
          <div className={classes.errorHeader}>Oups!</div>
          <div className={classes.errorText}>
            There is Error! Do not worry, it is not your fault. We are trying to
            solve this problem
          </div>
        </div>
      )}
    </>
  );
};
export default CompState;
