import React from 'react'


class LifeCycle extends React.Component{
  
  constructor(props) {
    super(props)
    
    this.state={
      count: 0
    }
    
    console.warn('生命周期钩子函数：constructor')
    // 最早执行，初始化state，处理this指向
  }
  
  handleClick =() =>{
    this.setState({
      count: this.state.count + 1
    })
    // this.forceUpdate()
  }
  
  
  // new Props， setState, forceUpdate，触发render函数
  render() {
    console.warn('生命周期钩子函数：render')
    // 渲染UI，不要在render里调用setState,递归更新，setState，既能更新state，又能更新UI，
    return (
      <div>
        {
          this.state.count > 3 ? (<p>豆豆被打死了</p>) : <Counter count={this.state.count}></Counter>
        }
        <button id='btn' onClick={this.handleClick}>打豆豆</button>
      </div>
    )
  }
  
  componentDidMount() {
    console.warn('生命周期钩子函数：componentDidMount')
    
    const title = document.getElementById('title')
    console.log(title);
    // 组件挂载完成，发送网络请求，进行dom操作
  }
}

class Counter extends React.Component{
  
  render() {
    console.warn('---子组件---生命周期钩子函数：render')
    return (
      <h1 id='title'>统计豆豆被打的次数：{this.props.count}</h1>
    )
  }
  
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('66666')
    }, 1000)
  }
  
  componentDidUpdate(prevProps) {
    console.warn('---子组件---生命周期钩子函数：componentDidUpdate')
  
    const title = document.getElementById('title')
    console.log(title);
    // 发送网络请求在if当中，进行dom操作，如果要设置this.setState()
    // 一定要if设置；直接调用会触发render函数，
    // 在走componentDidMount生命周期，再走componentDidUpdate生命周期，又走this.setState()
    console.log('上次的props：', prevProps, '当前的props：', this.props);
    if (prevProps.count !== this.props.count) {
      this.setState({})
    }
  }
  
  componentWillUnmount() {
  
    console.warn('---子组件---生命周期钩子函数：componentWillUnmount')
    
    clearInterval(this.timer)
  
  }
}

export default LifeCycle;