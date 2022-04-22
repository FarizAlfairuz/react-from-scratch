import React from 'react'
import { useRoutes } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import getRoutes from './routes'
import GlobalStyle from './components/GlobalStyles'
import Layout from './components/Layout'

const App = (): JSX.Element => {
  const routes = useRoutes(getRoutes())
  return (
    <div>
      <GlobalStyle />
      <Layout>{routes}</Layout>
    </div>
  )
}

export default hot(App)
