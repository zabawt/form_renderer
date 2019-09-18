import React from 'react';
import { fieldTypeInputEnum, fieldTypeSelectEnum } from './../types/formFields'

interface IFieldFactoryProps {
  type: fieldTypeInputEnum | fieldTypeSelectEnum;
}

const FieldFactory = (props: IFieldFactoryProps) => {
  const { type } = props;
  switch (type) {
    default:
      return <input type="text" />
  }
}

export default FieldFactory;