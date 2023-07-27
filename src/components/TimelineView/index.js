// Write your code he
import {Component} from 'react'
import './index.css'

class TimelineView extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    const {time, direction, callback} = this.props
    this.state = {time, end: time, increase: 0, direction, callback}
  }
  //   state = {pro: this.props, time: 30}

  componentDidMount() {
    this.timerId = setInterval(this.set, 1000)
  }

  set = () => {
    const {time, direction, increase, callback} = this.state
    if (direction === 'clockwise') {
      const {end} = this.state
      if (increase >= end) {
        callback()
        console.log('clear clockwise')

        clearInterval(this.timerId)
        this.setState({increase: end})
      } else {
        this.setState({time: increase, increase: increase + 1})
      }
    } else if (direction === 'antiClockwise') {
      if (time <= 0) {
        clearInterval(this.timerId)
        console.log('clear anti clockwise')

        callback()

        this.setState({time: 0})
      } else {
        this.setState({time: time - 1})
      }
    }
  }

  getClockwise = () => {
    const {increase} = this.state
    // console.log(pro)
    // console.log(pro.direction)
    return (
      <div>
        <h1>{increase}</h1>
      </div>
    )
  }

  getAntiClockwise = () => {
    const {time} = this.state
    // console.log(pro)
    // console.log(pro.direction)

    return (
      <div>
        <h1>{time}</h1>
      </div>
    )
  }

  render() {
    const {direction} = this.state
    // console.log(pro)
    // console.log(pro.direction)
    // console.log(callback())

    switch (direction) {
      case 'clockwise':
        return this.getClockwise()
      case 'antiClockwise':
        return this.getAntiClockwise()

      default:
        return null
    }
  }
}

export default TimelineView
