import classes from './numberField.module.css';
import { Props, IError, eChange, Ekey, PrintF, nestProps } from './Type';
import { useState, FC } from 'react';
const NumberField: FC<Props> = (props) => {
  const { val, title, onUpdateValue } = props;
  const { init, min, max, type }: nestProps = val;
  const [value, setValue] = useState<string | number>(init ? init : '');
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const errorMsg: IError = {
    empty: 'The value must be not empty',
    borders: `The value must be grater than ${min} and less than ${max}`,
  };
  const onKeyUp = (e: Ekey) => {
    if (e.key === 'Enter') errorHandling();
  };
  const onBlurHandler = () => errorHandling();
  const onChangeHandler = (data: eChange) => {
    clearErrors();
    setValue(data.target.value);
  };
  const clearErrors = () => {
    setIsError(false);
    setError('');
  };
  const setErrorHandler = (value: string) => {
    setError(value);
    setIsError(true);
    onUpdateValue(false);
  };
  const errorHandling = () => {
    if (value === null) return;
    if (value.toString().length === 0) {
      return setErrorHandler(errorMsg['empty']);
    }
    if (Number(value) < min || Number(value) > max) {
      return setErrorHandler(errorMsg['borders']);
    }
    onUpdateValue(true, type, Number(value));
  };
  const printTitle: PrintF = (list, value) => {
    const [sentStart, sentEnd] = list;
    const endOfSent = sentEnd || '';
    return value === '' ? sentStart : `${sentStart} ${value} ${endOfSent}`;
  };
  return (
    <div className={classes.container}>
      <label className={classes.label}>
        {isError && <span className={classes.error}>{error}</span>}
        {!isError && (
          <span className={classes.title}>{printTitle(title, value)}</span>
        )}
      </label>
      <div className={classes.btnWrapper}>
        <input
          value={value}
          type="number"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onKeyUp={onKeyUp}
        />
      </div>
    </div>
  );
};
export default NumberField;
