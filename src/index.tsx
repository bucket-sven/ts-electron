import * as React from 'react'
import * as ReactDOM from 'react-dom'

class HomePage extends React.Component<{}, {}> {
  public render() {
    return <div>
      Hello, world!
    </div>
  }
}

ReactDOM.render(<HomePage />, document.getElementById('main'))