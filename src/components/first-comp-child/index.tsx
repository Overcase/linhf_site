import * as React from 'react'
import './index.scss'

function FirstCompChild(params: any) {

  console.log(params, window.location, 'linhf')
  return (
    <section className='test-wrap'>
      first-comp-child
    </section>
  )
}

export default FirstCompChild