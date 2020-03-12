import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const withRedux = (actions: any, keywords: Array<string>) => {
  return function connectCop<Self>(WrappedComponent: React.ComponentType<Self>) {
    // 关闭 ts 错误
    // @ts-ignore 
    @connect((state: any) => {
      let needState: any = {}
      if (Array.isArray(keywords)) {
        needState['router'] = state['router']

        for (let key in state) {
          if (state.hasOwnProperty(key)) {
            keywords.includes(key) && (needState[key] = state[key]);
          }
        }
      } else {
        needState = {
          ...state
        }
      }

      return needState
    })
    class Template extends React.Component<Self, any> {

      render() {
        const props: any = this.props;
        // // 生成具有操作 state 能力的 actions
        let combineActions = bindActionCreators(actions, props.dispatch);

        return (
          <WrappedComponent {...props} combineActions={combineActions} />
        )
      }

    }

    return Template
  }
}




export default withRedux


