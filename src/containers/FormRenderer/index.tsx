import React from 'react';
import { AppContext } from '../../store';

class FormRenderer extends React.Component {

  render() {
    return <div>Form Renderer</div>
  }
}

FormRenderer.contextType = AppContext


export default FormRenderer;