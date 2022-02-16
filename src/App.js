import React from 'react';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      count: 0,
      text: '',
      content: '',
      isChecked: false,
      number: 0,
      obj: {
        num: 0
      }
    }
    
    this.addFour = this.addFour.bind(this)
    this.txtRef = React.createRef()
  }
  handleClick = e => {
    e.preventDefault();
    console.log(this.txtRef.current.value);
    console.log('单击事件');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    
    /*console.log('最新的state：', nextState)
    console.log('this.state：', this.state)*/
    return nextState.number !== this.state.number
  }
  
// this.setState,不能依赖前面的this.setState，
// 多次this.setState只能触发一次render（），
// this.setState只依赖state。
  
  // this.setState父组件更新会渲染子组件，但只会渲染当前的组件子树
  
  // 减轻state
  // 只要渲染的数据放在state中，不用渲染的放在生命周期的this上，各个组件都会拿到
  
  
  // 避免不必要的重新渲染，子组件没有任何变化不必要渲染
  // 使用shouldComponentUpdate,比render在先执行，return false；shouldComponentUpdate()=>render()
  // 通过props避免不必要的更新
  
  // 纯组件内部对比是shallow compare(浅层对比)
  // 如果是值对比，是没有坑的，如果是引用类型对比，它改变的引用类型的地址，
  // 对比前后的对象都是指向引用类型地址，没有对比性，UX是不会更新的，但是打印的值会更新
  
  // 修改方法：创建新对象
  
  handleNum =() =>{
    // 错误演示
    /*const newObj = this.state.obj
    newObj.num = Math.floor(Math.random()*3)
    this.setState(
      (state, props) =>{
        return {
          obj: newObj
        }
      },
      () => {
        console.log('状态更新完成：', this.state.obj.num)
      }
    )*/
  
    let newObj = { ...this.state.obj, num: Math.floor(Math.random()*3)}
    this.setState(()=> {
      
      return {
        obj: newObj
      }},
      () => {
        console.log('this.state.obj.num：', this.state.obj.num)
      })
  }
  
  
  addTwo() {
    
    // 推荐语法
    this.setState(
      (state, props) =>{
        return {
          count: state.count + 2
        }
      },
      () => {
        console.log('状态更新完成：', this.state.count)
      }
    )
  
    this.setState(
      (state, props) =>{
        return {
          count: state.count + 2
        }
      },
      () => {
        console.log('状态更新完成：', this.state.count)
      }
    )
  }
  
  handleNumber =() =>{
    this.setState(
      (state, props) =>{
        return {
          number: Math.floor(Math.random()*3)
        }
      },
      () => {
        console.log('handleNumber：', this.state.count)
      }
    )
  }
  
  addFour() {
    this.setState({
      count: this.state.count +4
    })
  }
  
  addSix = () => {
    this.setState({
      count: this.state.count +6
    })
  }
  
  handleChange = e => {
    const target = e.target
    
    const value = target.type ==='checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  

  // 这是实例
  render() {
    console.log('render', 11111)
    return (
       <div>
         <button onClick={() => {
           this.setState({
             count: this.state.count +1
           })
         }}>+1</button>
         
         <button onClick={() => this.addTwo()}>+2</button>
         
         <button onClick={this.addFour}>+4</button>
         
         <button onClick={this.addSix}>+6</button>
         
         <div onClick={this.handleClick}>计算器：{this.state.count}</div>
         
         <input type="text" name='text' value={this.state.text} onChange={this.handleChange}/>
         <div>输入框：{this.state.text}</div>
         
         <textarea name='content' value={this.state.content} onChange={this.handleChange}></textarea>
         <div>文本框：{this.state.content}</div>
         
         <input type='checkbox' name="isChecked" checked={this.state.isChecked} onChange={this.handleChange}></input>
         
         <div>对错框：{this.state.isChecked&&'hahha'}</div>
  
         <input type="text" ref={this.txtRef}/>
         <br/>
  
         {/*<div>number：{this.state.number}</div>*/}
         
  
         <NumberBox number={this.state.number}></NumberBox>
         
         <button onClick={this.handleNumber}>重新生成</button>
  
         <div>obj.num：{this.state.obj.num}</div>
  
         <button onClick={this.handleNum}>重新生成</button>
         
  
         
       </div>
    )
  }
}

/*function App() {
    function handleClick() {
        console.log('单击事件');
    }

    return (
        <button onClick={handleClick}>点我，点我</button>
    )
}*/


class NumberBox extends React.Component{
  
  shouldComponentUpdate(nextProps, nextState) {
    
    console.log('最新的props：', nextProps)
    console.log('this.props：', this.props)
    return nextProps.number !== this.props.number
  }
  
  render() {
    console.log('子组件的render');
    return (
      <div>number：{this.props.number}</div>
    )
  }
  
}

export default App;
