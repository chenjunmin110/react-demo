import React from 'react'

function withMouse(WrappedComponent) {
  class Mouse extends React.Component{
    
    // 鼠标位置state
    state = {
      x: 0,
      y: 0
    }
    
    render() {
      return <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
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
  
  Mouse.displayName = `withMouse${getWrappedComponent(WrappedComponent)}`
  
  function getWrappedComponent(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }
  
  return Mouse
}

export default withMouse