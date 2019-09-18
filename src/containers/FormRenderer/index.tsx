import React from 'react';
import { AppContext } from '../../store';
import FieldFactory from './../../commons/FieldFactory'
import { formRenderFields } from './../../commons/types/formFields'
import FieldLabel from './../../components/FieldLabel'
import FormWrapper from './../../components/FormWrapper'



class FormRenderer extends React.Component<any, {}> {


  private fieldsList = () => {
    const { fields } = this.context.state;
    return fields.map((item: formRenderFields, key: number) => {
      return <FieldLabel label={item.label}><FieldFactory type={item.type} /></FieldLabel>
    })
  }

  private wrapWithValidator = () => {

  }


  render() {
    const { formName, formId, onSubmit } = this.context.state;
    return <FormWrapper name={formName} id={formId} onSubmit={onSubmit}>{[this.fieldsList()]}</FormWrapper>
  }
}
FormRenderer.contextType = AppContext


export default FormRenderer;