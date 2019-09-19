import React, { SyntheticEvent } from 'react';
import { fieldTypeInputEnum, formRenderFields } from '../../commons/types/formFields';

type fieldFactoryProps = { id: string, onChange: any, onBlur: any } & Pick<formRenderFields, "type" | "value" | "name">;
type onChangeEvent = SyntheticEvent<HTMLInputElement | HTMLSelectElement>;

const FieldFactory = (props: fieldFactoryProps) => {
  const { type, onChange, ...rest } = props;

  const handleOnChange = (event: onChangeEvent) => {
    event.preventDefault();
    props.onChange(event.currentTarget.value);
  }

  switch (type) {
    case fieldTypeInputEnum.text:
    default:
      return <input {...rest} type={fieldTypeInputEnum.text} onChange={handleOnChange} />
  }
}

export default FieldFactory;