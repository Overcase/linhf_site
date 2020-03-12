import {
  userNameType,
  userStatusType,
  userAgentType,
  userLoginType
} from '../type/user'
import { actionOptions, reduxAction } from '../type/redux'

class userAction {
  // 普通模式 返回一个对象  让 dispatch 调用
  static _userLoginAction = (options: actionOptions) => ({
    type: userLoginType,
    payload: options.payload
  })

  // 使用了 redux-thunk 的方式, 可以传入一个函数给 dispatch 调用
  static userNameAction = (options: actionOptions) => {
    return (dispatch: (data: reduxAction) => any) => {
      dispatch({
        type: userNameType,
        payload: options.payload
      })
    }
  }

  static userStatusAction = (options: actionOptions) => {
    return (dispatch: (data: reduxAction) => any) => {
      dispatch({
        type: userStatusType,
        payload: options.payload
      })
    }
  }

  static userAgentAction = (options: actionOptions) => {
    return (dispatch: (data: reduxAction) => any) => {
      dispatch({
        type: userAgentType,
        payload: options.payload
      })
    }
  }

  static userLoginAction = (options: actionOptions) => {
    return (dispatch: (data: reduxAction) => any) => {
      dispatch({
        type: userLoginType,
        payload: options.payload
      })
    }
  }
}

export default userAction
