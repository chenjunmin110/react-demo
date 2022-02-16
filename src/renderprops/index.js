import React from 'react'
import Mouse from './Mouse'
import img from '../assets/logo192.png'
import withMouse from '../HOC'

// 高阶组件
const Position = props =>(<p>鼠标坐标：(x: {props.x}, y:{props.y}, a: {props.aa})</p>)

// 高阶组件渲染函数
const MousePosition = withMouse(Position)

class RenderProps extends React.Component {
  render() {
    return (
      <div>
        <h1>RenderProps模式</h1>
        {/*<Mouse render={(mouse)=>{
          return (<p>鼠标坐标：{mouse.x},{mouse.y}</p>)
        }}></Mouse>
        <Mouse render={(mouse)=>{
          return (<img src={img} alt='猫' style={{
            position: 'absolute',
            top: mouse.y-96,
            left: mouse.x-96
          }}></img>)
        }}></Mouse>*/}
        <Mouse>
          {mouse => {
            return (<p>鼠标坐标：{mouse.x},{mouse.y}</p>)
          }}
        </Mouse>
        <Mouse>
          {mouse=>{
            return (<img src={img} alt='猫' style={{
                position: 'absolute',
                top: mouse.y-96,
                left: mouse.x-96
              }}></img>)}}
        </Mouse>
  
        <MousePosition aa='111'></MousePosition>
        
        
      </div>
    )
  }
}

export default RenderProps;