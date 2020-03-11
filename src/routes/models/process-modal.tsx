import * as React from 'react';
import { Route } from 'react-router-dom';
const { lazy } = React
export const ProcessList: any[] = [
  {
    path: '/first/firstChild',
    component: lazy(() => import('../../components/first-comp-child')),
  },
  {
    path: '/first/secondChild',
    component: lazy(() => import('../../components/second-comp-child')),
  }
]

export default (dynamicProps: any) => {
  return ProcessList.map((route, index): any => {
    return (
      <Route
        path={route.path}
        key={index}
        component={(props: any) => <route.component {...props} {...dynamicProps} routes={route.routes} />}
      />
    )
  })
}