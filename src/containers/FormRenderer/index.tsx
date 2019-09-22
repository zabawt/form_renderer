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
import FieldWrapper from '../../components/FieldWrapper';
import Submit from '../../components/Submit';
import { formSubmit } from '../../commons/types/form';


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
        if (validationRules) this.dispatchFieldError(field, validateRuleset(validationRules, event.currentTarget.value));
      }

  private validateForm = (): boolean => {
    let validationResult = true;
    const { fields } = this.context.state;
    Object.keys(fields).map((field) => {
      const { validation, value } = fields[field];
      const fieldValidation = validateRuleset(validation, value);
      if (fieldValidation.error) {
        validationResult = false;
      }
      this.dispatchFieldError(field, fieldValidation)
    });
    return validationResult;
  }

  private getDynamicFieldValue = (field: string | undefined) => {
    return field ? this.context.state.fields[field] && this.context.state.fields[field].value : undefined;
  }

  private wrapWithLabel = (item: string) =>
    ({ label, type, name, validation, error, errorMessage, dynamicValueField, ...rest }: formRenderFields) =>
      <FieldWrapper key={item}>
        <FieldLabel htmlFor={name} label={label} />
        <FieldFactory name={name} type={type} id={item} onChange={this.dispatchFieldUpdate(item)} onBlur={this.validateField(item)(validation)} dynamicValue={this.getDynamicFieldValue(dynamicValueField)}  {...rest} />
        {this.getErrorMessages({ error, errorMessage })}
      </FieldWrapper>

  private getErrorMessages = ({ error, errorMessage }: fieldError) => {
    return error && <ValidatorMessage errorMessage={errorMessage} />
  }

  private handleFormSubmit: formSubmit = (event) => {
    const { dispatch } = this.context;
    event.preventDefault()
    if (this.validateForm()) {
      dispatch({ type: actionTypes.SUBMIT_FORM, name: "" })
    }
  }

  render() {
    const { formName, formId, submitted } = this.context.state;
    if (!submitted) {
      return <FormWrapper name={formName} id={formId} onSubmit={this.handleFormSubmit}>
        {this.getFields()}
        <Submit />
      </FormWrapper>
    } else {
      return <div>Form submitted</div>
    }
  }
}

FormRenderer.contextType = AppContext

export default FormRenderer;