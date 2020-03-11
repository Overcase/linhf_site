import * as React from 'react'
import Header from './header'
import Footer from './footer'
import Content from './content'

type LayoutType = {

}

function Layout(params: LayoutType) {
  return (
    <section className="full-wrap">
      <Header />
      <Content />
      <Footer />
    </section>
  )
}


export default Layout

