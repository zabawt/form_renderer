import React from 'react';
import { StoreProvider } from '../../store'
import StateOutput from '../../components/StateOutput'
import FlexWrapper from './../../components/FlexWrapper'
import FormRenderer from '../FormRenderer';
import './../../commons/assets/scss/index.scss'

//main app container
const App = () => {
  return <StoreProvider>
    <FlexWrapper>
      <FormRenderer />
      <StateOutput />
    </FlexWrapper>
  </StoreProvider>
}

export default App;