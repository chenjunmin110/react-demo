import React from 'react';
import Children from './Children'
import Children1 from './Children1'


class Parrnt extends React.Component{
  state = {
    lastName: '王',
    count: 0
  }
  
  getChildMsg = data => {
    console.log('收到的子组件的数据:', data)
    this.setState({
      lastName: data
    })
  }
  
  handleChildren = () => {
    this.setState({
      count: this.state.count + 1
    })
    
  }
  
  
  
  
  render() {
    return (
      <div>
        <Children
          count={this.state.count}
          getMsg={this.getChildMsg}
          name={this.state.lastName}>
        </Children>
        <Children1
          getMsg={this.handleChildren}
          name={this.state.lastName}/>
      </div>
    )
  }
}

export default Parrnt