import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk' //redux-thunk中间件可以让action创建函数先不返回一个action对象，而是返回一个函数,可以用来处理异步请求
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers/index'

export const history = createBrowserHistory()

let store: any
export default function configureStore(preloadedState?: any) {
  if (store) {
    return store
  }
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const _arguments = [routerMiddleware(history), thunk]

  // 开发模式下  加载 logger 打印 action
  if (process.env.NODE_ENV !== 'production') {
    let { createLogger } = require('redux-logger')
    _arguments.push(createLogger())
  }

  store = createStore(
    createRootReducer(history),
    preloadedState,
    //@ts-ignore
    composeEnhancer(applyMiddleware.apply(null, _arguments))
  )

  // Hot reloading
  //@ts-ignore
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    //@ts-ignore
    module.hot.accept('../reducers/index', () => {
      store.replaceReducer(createRootReducer(history))
    })
  }

  return store
}
