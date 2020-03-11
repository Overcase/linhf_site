import * as React from 'react'
import './index.scss'
import { Switch, Redirect } from 'react-router-dom'
import Routers from '../../routes'

function Content(params: any) {
  return (
    <section className='content-wrap'>
      content
      <Switch>
        {Routers.modal()}
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      </Switch>
    </section>
  )
}


export default Content