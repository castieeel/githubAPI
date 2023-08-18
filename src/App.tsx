import React from 'react'
import { GlobalStyle } from './styled-components/app.style'
import { AppRoutes } from './routes'

export const App: React.FunctionComponent = () => {
  return (
    <div>
    <GlobalStyle/>
    <AppRoutes/>
    </div>
  )
}
