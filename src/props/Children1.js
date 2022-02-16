import React from 'react';

class Children1 extends React.Component{
  state = {
    count: 0
  }
  
  handleClick = () => {
    this.props.getMsg(1)
  }
  
  handleChildren = () => {
    this.props.getMsg()
  }
  
  
  render() {
    return (
      <div>
        555555
        <p>子组件Children1接受的props：{this.props.name}</p>
        
        <button onClick={this.handleClick}>点我，给父组件传输数据</button>
        
        <button onClick={this.handleChildren}>点我，给兄弟组件Children传输数据</button>
      </div>
    )
  }
  
}

export default Children1