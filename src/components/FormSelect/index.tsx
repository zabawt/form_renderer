import React, { SyntheticEvent } from 'react';
import { CommonInputProps } from '../../commons/types/formComponents';
import { selectOption, selectOptions } from '../../commons/types/formFields';

type SelectTypeProps = CommonInputProps & {
  options: selectOptions | undefined;
  allowEmpty?: boolean;
}

const FormSelect = (props: SelectTypeProps) => {
  return <select   {...props}>
    {props.allowEmpty && <option></option>}
    {props.options && props.options.map(({ value, text }: selectOption, index: number) => {
      return <option value={value} key={`${value}_${index}`}>{text}</option>
    })}
  </select>

}

export default FormSelect;