import React from "react";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import type {RouteObject} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

interface ExtendedRouteObject extends RouteObject {
    validation?: boolean;
    children?: ExtendedRouteObject[];
}

const routeObject: ExtendedRouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/detail',
        element: <DetailPage />,
        validation: true
    },
    {
        path: '*',
        element: <NotFoundPage />,
      },
]

const getRouteObject = (routes: ExtendedRouteObject[]): RouteObject[] => {
  return routes.map(routeObject => {
        return routeObject as RouteObject;
    });
}

const getRoutes = (): RouteObject[] => getRouteObject(routeObject)

export default getRoutes;