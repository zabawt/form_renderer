import React from 'react';
import { CommonInputProps } from '../../commons/types/formComponents';
import { selectOption, selectOptions } from '../../commons/types/formFields';
import './styles.scss';

type SelectTypeProps = CommonInputProps & {
  options: selectOptions | undefined;
  allowEmpty?: boolean;
}

const FormSelect = ({ options, allowEmpty, ...rest }: SelectTypeProps) => {
  return <select {...rest} className="form__select">
    {allowEmpty && <option></option>}
    {options && options.map(({ value, text }: selectOption, index: number) => {
      return <option value={value} key={`${value}_${index}`}>{text}</option>
    })}
  </select>

}

export default FormSelect;