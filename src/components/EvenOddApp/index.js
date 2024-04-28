// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    randomNumber: 0,
    randomNumberString: 'Even',
  }
  onIncrement = () => {
    this.setState(
      prevState => ({
        randomNumber: prevState.randomNumber + Math.ceil(Math.random() * 100),
      }),
      () => {
        if (this.state.randomNumber % 2 !== 0) {
          this.setState({randomNumberString: 'Odd'})
        } else {
          this.setState({randomNumberString: 'Even'})
        }
      },
    )
  }

  render() {
    const {randomNumber, randomNumberString} = this.state

    return (
      <div>
        <h1>Count {randomNumber}</h1>
        <p>Count is {randomNumberString}</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
