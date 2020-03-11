import * as React from 'react'
import './index.scss'
import { Switch } from 'react-router-dom'
import processViewRoutes from '../../routes/models/process-modal'

function FirstComp(props: any) {
  return (
    <section className='test-wrap'>
      first-comp
      <Switch >{processViewRoutes(props)}</Switch>
    </section>
  )
}


export default FirstComp