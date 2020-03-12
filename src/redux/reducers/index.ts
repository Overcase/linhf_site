import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import reducersCollector from './combine'

console.log(reducersCollector, 'reducersCollector')
const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    ...reducersCollector
  })

export interface State {
  router: RouterState
}

export default rootReducer
