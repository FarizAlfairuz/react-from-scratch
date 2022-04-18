import React from 'react'
import type { RouteObject } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import NotFoundPage from './pages/NotFoundPage'

interface ExtendedRouteObject extends RouteObject {
  validation?: boolean
  children?: ExtendedRouteObject[]
}

const routeObject: ExtendedRouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:id',
    element: <DetailPage />,
    validation: true,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

const getRouteObject = (routes: ExtendedRouteObject[]): RouteObject[] => {
  return routes.map((route) => {
    return route as RouteObject
  })
}

const getRoutes = (): RouteObject[] => getRouteObject(routeObject)

export default getRoutes
