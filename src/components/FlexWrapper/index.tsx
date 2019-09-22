import React, { ReactNode } from 'react';
import './styles.scss';


type FlexWrapperProp = {
  children: ReactNode[]
}

const FlexWrapper = ({ children }: FlexWrapperProp) => {

  return <div className="flex-wrapper__container">
    {children}
  </div>

}

export default FlexWrapper;