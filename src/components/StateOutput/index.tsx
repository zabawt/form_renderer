import React from 'react';
import { StoreConsumer } from './../../store'

const StateOutput = () => {
  return <StoreConsumer>{
    (value: any) => { return <pre>State output:{JSON.stringify(value, null, 4)}</pre> }
  }</StoreConsumer>

}

export default StateOutput;