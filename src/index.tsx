import * as React from 'react'
import { render } from 'react-dom'
import './index.scss'
import './main'
interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  public render(): any {
    return (
      <div>
        Ts config - 1111
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))