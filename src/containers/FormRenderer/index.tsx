import React from 'react';
import { AppContext } from '../../store';
import FieldFactory from '../../commons/FieldFactory'
import FieldLabel from '../../components/FieldLabel'
import FormWrapper from '../../components/FormWrapper'
import { formRenderFields } from '../../commons/types/formFields';
import { actionTypes, Action } from '../../commons/types/actions';

class FormRenderer extends React.Component<any, {}> {

  private getFields = (): JSX.Element[] => {
    const { state: { fields } } = this.context;
    return Object.keys(fields).map(item => this.wrapWithLabel(item)({ ...fields[item] })
    )
  }

  private dispatchFieldUpdate = (field: string) => (value: string) => {
    return this.context.dispatch({ type: actionTypes.UPDATE_FIELD_VALUE, payload: { name: field, value } });
  }

  private wrapWithLabel = (item: string) =>
    ({ label, type, value, name }: formRenderFields) =>
      <FieldLabel htmlFor={name} label={label} key={item}>
        <FieldFactory type={type} value={value} id={item} name={name} onChange={this.dispatchFieldUpdate(item)} />
      </FieldLabel>


  private AddValidator = () => {

  }

  render() {
    const { formName, formId, onSubmit } = this.context.state;
    return <FormWrapper name={formName} id={formId} onSubmit={onSubmit}>{this.getFields()}</FormWrapper>
  }
}

FormRenderer.contextType = AppContext

export default FormRenderer;