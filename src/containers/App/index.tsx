import React from 'react';
import { StoreProvider } from '../../store'
import FormRenderer from '../FormRenderer';

//main app container
const App = () => <StoreProvider><FormRenderer /></StoreProvider>

export default App;