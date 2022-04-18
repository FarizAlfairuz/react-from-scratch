import React from 'react'
import { useRoutes } from 'react-router-dom'
import getRoutes from './routes'

function App(): JSX.Element {
  const routes = useRoutes(getRoutes())
  return <div>{routes}</div>
}

export default App
