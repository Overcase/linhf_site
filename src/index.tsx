import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './app'
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/store';

import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd'

const store = configureStore();

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))