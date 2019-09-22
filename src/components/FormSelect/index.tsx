import React from 'react';
import { CommonInputProps } from '../../commons/types/formComponents';
import { selectOption, selectOptions } from '../../commons/types/formFields';
import './styles.scss';

type SelectTypeProps = CommonInputProps & {
  options: selectOptions | undefined;
  allowEmpty?: boolean;
  dynamicValue?: string | undefined;
}

const FormSelect = ({ options, allowEmpty, dynamicValue, ...rest }: SelectTypeProps) => {
  return <select {...rest} className="form__select">
    {allowEmpty && <option></option>}
    {options && options.map(({ value, text, mappedValues }: selectOption, index: number) => {
      if (dynamicValue === undefined || (mappedValues && mappedValues.includes(dynamicValue))) {
        return <option value={value} key={`${value}_${index}`}>{text}</option>
      }
      return null;
    })}
  </select>

}

export default FormSelect;