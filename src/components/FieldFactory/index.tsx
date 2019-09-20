import React, { SyntheticEvent } from 'react';
import { fieldTypeInputEnum, fieldTypeSelectEnum, selectOptions } from '../../commons/types/formFields';
import TextInput from '../TextInput';
import FormSelect from '../FormSelect';

type onChangeEvent = SyntheticEvent<HTMLInputElement | HTMLSelectElement>;

type fieldFactoryProps = { id: string, onChange: any, onBlur: any, type: string, name: string, value: string, options?: selectOptions }

const FieldFactory = (props: fieldFactoryProps) => {
  const { type, options, onChange, ...rest } = props;

  const handleOnChange = (event: onChangeEvent) => {
    event.preventDefault();
    props.onChange(event.currentTarget.value);
  }

  switch (type) {
    case fieldTypeSelectEnum.select:
      return <FormSelect onChange={handleOnChange} options={options} {...rest} />

    case fieldTypeInputEnum.text:
    default:
      return <TextInput onChange={handleOnChange} {...rest} />;
  }
}

export default FieldFactory;