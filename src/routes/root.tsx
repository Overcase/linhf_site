import * as React from 'react';
import { Route } from 'react-router-dom';
import Root from '../layouts/index';
export const rootRouteList: any[] = [
  {
    path: '/',
    component: Root,
  }
]

export default (dynamicProps?: any) => {
  return rootRouteList.map((route, index): any => {
    return (
      <Route
        path={route.path}
        key={index}
        component={(props: any) => <route.component {...props} {...dynamicProps} routes={route.routes} />}
      />
    )
  })
}