import React, { SyntheticEvent } from 'react';
import { fieldTypeInputEnum, formRenderFields } from './../../commons/types/formFields';
import { Omit } from '../../../node_modules/@types/yargs';

type fieldFactoryProps = { id: string, onChange: any } & Omit<formRenderFields, "label">;

const FieldFactory = (props: fieldFactoryProps) => {
  const { type, onChange, ...rest } = props;

  const handleOnChange = (event: SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => {
    event.preventDefault();
    props.onChange(event.currentTarget.value);
  }

  switch (props.type) {
    case fieldTypeInputEnum.text:
    default:
      return <input {...rest} type={fieldTypeInputEnum.text} onChange={handleOnChange} />
  }
}

export default FieldFactory;