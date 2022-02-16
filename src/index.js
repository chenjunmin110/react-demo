import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App.js'
import Comments from './Comments.js'
import Parent from './props/Parent.js'
import LifeCycle from './LifeCycle'
import RenderProps from './renderprops'
import withMouse from './HOC'
import AppRouter from './AppRouter.js'

// 推荐小括号包含jsx
const name = 'name'

const isLoading = true;
const loadData = () => {
    /*if (isLoading) {
        return <div>loading...</div>
    }
    return <div>数据加载完成</div>*/

    return isLoading && (<div>loading...</div>)

    return isLoading ? (<div>loading...</div>) : (<div>数据加载完成</div>)
}

const song = [
    {id: 1, name: '痴心绝对'},
    {id: 2, name: '像我这样的人'},
    {id: 3, name: '南山南'}
]

const title = (
    <div className='title'>
        hello jsx
        <span>这是span</span>
        <div>你好，我是{name}</div>
        条件渲染：{loadData()}
    </div>
)
// 使用map映射, react能用js实现就绝对不新增指令
const list = (
    <ul>
        {song.map(item => {
            return <li key={item.id} className='songList' style={{color: 'red'}}>{item.name}</li>})}
    </ul>
)
// 组件，函数组件，类组件
// 条件： 函数名称要大写，小写认为react元素，有return有返回值， return null不渲染
// 函数组件增加父组件属性通过子组件通过传参props拿到数据
// 函数组件点击时间不用this.event,直接event，
const Hello = props => {
  console.log(props)
  props.fn()
  return (
    <div>
      这是我的第一个函数组件
      props: {props.name}
      {props.tag}
    </div>
    )
}
// 函数组件： 没有自己的state，只负责数据展示
// 类组件：有状态组件：state有变化，0=》1 组件内部私有属性,通过this.state;
// 类组件: 名称要大写，要有render方法，要继承React.Component，render方法有返回值
// 类组件增加父组件属性通过子组件通过this.props,props是只读的，要在constructor要将props传给super（），不然无法获取props
// 只有类组件才有生命周期



class Hello1 extends React.Component {
  
  constructor(props) {
    super(props)
    
    console.log(props)
  }
  
  render() {
    console.log(this.props)
    
    return (<div>
      Hello react componet
      props: {this.props.name}
    </div>)
  }
}



const root = window.document.getElementById('root')

/*ReactDOM.render(
  <Hello1
    tag={<p>这是一个p标签</p>}
    fn={() => console.log('这是一个函数')}
    name='jack'>
    </Hello1>,
  root
)*/
/*ReactDOM.render(
  <Parent
    tag={<p>这是一个p标签</p>}
    fn={() => console.log('这是一个函数')}
    name='jack'>
  </Parent>,
  root
)*/

/*ReactDOM.render(
  <LifeCycle>
  </LifeCycle>,
  root
)*/

ReactDOM.render(<AppRouter/>, root)

