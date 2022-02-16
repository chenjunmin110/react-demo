import React from 'react'
import PropTypes from 'prop-types';

class Mouse extends React.Component{
  
  // 鼠标位置state
  state = {
    x: 0,
    y: 0
  }
  
  render() {
    return this.props.children(this.state)
  }
  
  // 处理鼠标移动
  
  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  
  
  // 监听鼠标移动时间
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }
  
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }
  
}
Mouse.propsTypes = {
  children: PropTypes.func.isRequired
}

export default Mouse
