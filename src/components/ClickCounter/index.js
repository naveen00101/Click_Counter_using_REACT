// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {value: 0}

  increment = () => {
    this.setState(prevState => ({value: prevState.value + 1}))
  }

  render() {
    const {value} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <span className="value">{value}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button" onClick={this.increment} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
