import React from 'react'
import { Wrapper } from './container.style'

const Container = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Container