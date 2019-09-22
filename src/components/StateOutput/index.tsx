import React from 'react';
import { StoreConsumer } from '../../store'
import './styles.scss';

const StateOutput = () => {
  return <StoreConsumer>{
    (value: any) => { return <pre className="state__output"><h3>State output:</h3>{JSON.stringify(value.state, null, 4)}</pre> }
  }</StoreConsumer>

}

export default StateOutput;