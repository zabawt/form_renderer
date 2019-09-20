import React, { SyntheticEvent } from 'react';
import { AppContext } from '../../store';
import FieldFactory from '../../components/FieldFactory'
import FieldLabel from '../../components/FieldLabel'
import FormWrapper from '../../components/FormWrapper'
import { formRenderFields } from '../../commons/types/formFields';
import { actionTypes } from '../../commons/types/actions';
import ValidatorMessage from '../../components/ValidatorMessage';
import { fieldError, validation } from '../../commons/types/validation';
import { validateRuleset } from '../../commons/validation/validators';


class FormRenderer extends React.Component<any, {}> {

  private getFields = (): JSX.Element[] => {
    const { fields } = this.context.state;
    return Object.keys(fields).map(item => this.wrapWithLabel(item)({ ...fields[item] })
    )
  }

  private dispatchFieldUpdate = (field: string) => (value: string) => {
    return this.context.dispatch({ type: actionTypes.UPDATE_FIELD_VALUE, name: field, value });
  }

  private dispatchFieldError = (field: string, error: fieldError) => {
    return this.context.dispatch({ type: actionTypes.SET_FIELD_ERROR, name: field, ...error })
  }

  //this should be moved out to separate component
  private validateField = (field: string) =>
    (validationRules: validation[] | null) =>
      (event: SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => {
        event.preventDefault();
        if (validationRules) {
          const { value } = event.currentTarget;
          this.dispatchFieldError(field, validateRuleset(validationRules, value));
        }
      }

  private wrapWithLabel = (item: string) =>
    ({ label, type, value, name, error, errorMessage, validation }: formRenderFields) =>
      <FieldLabel htmlFor={name} label={label} key={item}>
        <FieldFactory type={type} value={value} id={item} name={name} onChange={this.dispatchFieldUpdate(item)} onBlur={this.validateField(item)(validation)} />
        {this.getErrorMessages({ error, errorMessage })}
      </FieldLabel>

  private getErrorMessages = ({ error, errorMessage }: fieldError) => {
    return error && <ValidatorMessage errorMessage={errorMessage} />
  }

  render() {
    const { formName, formId, onSubmit } = this.context.state;
    return <FormWrapper name={formName} id={formId} onSubmit={onSubmit}>{this.getFields()}</FormWrapper>
  }
}

FormRenderer.contextType = AppContext

export default FormRenderer;