import React from 'react';
import { AppContext } from '../../store';


class FormRenderer extends React.Component {

  render() {

    const { state, dispatch } = this.context;

    return <div onClick={(e) => { dispatch({ type: 'TEST' }) }}>Form Renderer</div>
  }
}

FormRenderer.contextType = AppContext


export default FormRenderer;