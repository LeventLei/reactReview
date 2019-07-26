import React, { Component } from 'react'

function cart(props) {
  return (
  <table>
    <tbody>
    { props.data.map(item => ite) }
    </tbody>
  </table>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curDate: ''
    }
  }

  componentWillMount() {
  }

  render() {
    return (
    <div>
      <span>{ this.state.curDate }</span>
    </div>
    )
  }

  componentDidMount() {
    this.updateTime()
  }

  componentWillReceiveProps(nextProps) {
  }

  // shouldComponentUpdate(nextProps, nextState) { }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
  }

  updateTime = () => {
    setInterval(() => {
      this.setState({
        curDate: new Date().toLocaleTimeString()
      })
    }, 1000)
  }
}

export default App
