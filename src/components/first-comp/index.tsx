import * as React from 'react'
import './index.scss'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import processViewRoutes from '../../routes/models/process-modal'
import userAction from '@action/user'
import withRedux from '@/higher-comp/redux-higher'
console.log({ ...userAction }, 'userAction')

// @ts-ignore
@withRedux({ ...userAction }, ['user'])
class FirstComp extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    const { combineActions } = this.props
    // 测试是否能使用
    combineActions.userNameAction({
      payload: 'linhf-update'
    })

    combineActions._userLoginAction({
      payload: true
    })

  }

  render() {

    console.log(this.props, 'redux')
    return (
      <section className='test-wrap'>
        first-comp
        <Switch >{processViewRoutes(this.props)}</Switch>
      </section>
    )
  }
}


export default FirstComp

