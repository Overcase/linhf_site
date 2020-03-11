import * as React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader';
import Routers from './routes';
import myReact from './utils/my-react'
import Layout from './layouts';
interface IAppProps { }
interface IAppState { }

const { Suspense } = React

console.log(Routers.root(), 'fwfw')
function App() {
  const [routePath, setRoutePath] = React.useState('/first')
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <>
          <input type="text" onInput={(e: any) => {
            setRoutePath(e.target.value)
          }} />
          <Link to={routePath}>
            {routePath}
          </Link>
        </>
        <Switch>
          {Routers.root()}
          {Routers.modal()}
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default hot(module)(App)