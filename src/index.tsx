import * as React from 'react'
import { render } from 'react-dom'
import './main'
import './index.dev'

interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  public render(): any {
    return (
      <div>
        Ts config
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))