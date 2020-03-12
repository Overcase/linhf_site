import { Action } from 'redux'
import {
  userNameType,
  userStatusType,
  userAgentType,
  userLoginType
} from '../type/user'
import { reduxAction } from '../type/redux'

interface userState {
  userName: string
  userStatus: string | number
  userAgent: string
  userLogin: boolean
}

class _state implements userState {
  userName = ''
  userStatus = -1
  userLogin = false
  userAgent = ''
}

const __s = new _state()

function user(state: userState = __s, action: reduxAction) {
  switch (action.type) {
    case userNameType:
      state.userName = action.payload
      break
    case userStatusType:
      state.userStatus = action.payload
      break
    case userAgentType:
      state.userAgent = action.payload
      break
    case userLoginType:
      state.userLogin = action.payload
      break
    default:
      break
  }
  return { ...state }
}

export default {
  user
}
