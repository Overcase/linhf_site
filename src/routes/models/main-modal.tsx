import * as React from 'react';
import { Route } from 'react-router-dom';
import { ProcessList } from './process-modal'

const { lazy } = React

export const MainModalList: any[] = [
  {
    path: '/first',
    component: lazy(() => import('../../components/first-comp')),
  },
  {
    path: '/second',
    component: lazy(() => import('../../components/second-comp')),
    routes: ProcessList
  }
]

export default (dynamicProps?: any) => {
  return MainModalList.map((route, index): any => {
    return (
      <Route
        path={route.path}
        key={index}
        component={(props: any) => <route.component {...props} {...dynamicProps} routes={route.routes} />}
      />
    )
  })
}