import React from 'react';
import { StoreProvider } from './../../store'
import FormRenderer from '../FormRenderer';

const App = () => {
  //main app container

  return <StoreProvider><FormRenderer /></StoreProvider>

}


export default App;