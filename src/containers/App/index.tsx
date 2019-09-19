import React from 'react';
import { StoreProvider } from '../../store'
import StateOutput from './../../components/StateOutput'
import FormRenderer from '../FormRenderer';

//main app container
const App = () => {
  return <StoreProvider>
    <FormRenderer />
    <StateOutput />
  </StoreProvider>
}

export default App;