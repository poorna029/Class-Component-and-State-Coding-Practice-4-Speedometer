// Write your code here

import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(pr => ({speed: pr.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(pr => ({speed: pr.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="main">
        <h1 className="speedometer">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="speedometer">Speed is {speed}mph</h1>
        <p className="speedometer">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="accl" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="brake" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
