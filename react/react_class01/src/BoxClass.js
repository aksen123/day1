import React, { Component } from 'react'

export default class BoxClass extends Component {
  componentWillUnmount() {
    console.log('bye')
  }
  render() {
    return (
      <div>
        {this.props.num}
      </div>
    )
  }
}
