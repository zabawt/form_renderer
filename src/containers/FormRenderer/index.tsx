import React, { SyntheticEvent } from 'react';
import { AppContext } from '../../store';
import FieldFactory from '../../components/FieldFactory'
import FieldLabel from '../../components/FieldLabel'
import FormWrapper from '../../components/FormWrapper'
import { formRenderFields } from '../../commons/types/formFields';
import { actionTypes } from '../../commons/types/actions';
import ValidatorMessage from '../../components/ValidatorMessage';


class FormRenderer extends React.Component<any, {}> {

  private getFields = (): JSX.Element[] => {
    const { fields } = this.context.state;
    return Object.keys(fields).map(item => this.wrapWithLabel(item)({ ...fields[item] })
    )
  }

  private dispatchFieldUpdate = (field: string) => (value: string) => {
    return this.context.dispatch({ type: actionTypes.UPDATE_FIELD_VALUE, payload: { name: field, value } });
  }

  private dispatchFieldError = (field: string) => (error: any) => {
    return this.context.dispatch({ type: actionTypes.SET_FIELD_ERROR, payload: { name: field, error } })
  }
  //this should be moved out to separate component
  private validateField = (field: string) => (validationRules: any[] | null) => (event: SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!validationRules) return;
    const { value } = event.currentTarget;

    for (let i = 0, len = validationRules.length; i < len; i++) {
      if (!validationRules[i].rule(value)) {
        this.dispatchFieldError(field)({ valid: false, message: validationRules[i].message })
      }
    }
  }

  private wrapWithLabel = (item: string) =>
    ({ label, type, value, name, error, validation }: formRenderFields) =>
      <FieldLabel htmlFor={name} label={label} key={item}>
        <FieldFactory type={type} value={value} id={item} name={name} onChange={this.dispatchFieldUpdate(item)} onBlur={this.validateField(item)(validation)} />
        {this.getErrorMessages(error)}
      </FieldLabel>

  private getErrorMessages = (error: any) => {
    return error && <ValidatorMessage error={error} />
  }

  render() {
    const { formName, formId, onSubmit } = this.context.state;
    return <FormWrapper name={formName} id={formId} onSubmit={onSubmit}>{this.getFields()}</FormWrapper>
  }
}

FormRenderer.contextType = AppContext

export default FormRenderer;