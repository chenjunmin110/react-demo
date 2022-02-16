import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Login extends React.Component {
  
  handleLogin = () => {
    this.props.history.push('/home')
  }
  
  render() {
    return (
      <div>
        <p>登录页面</p>
        <button onClick={this.handleLogin}>登录</button>
      </div>
    )
  }
}

const Home = (props) => {
  
  const handleBack = () => {
    props.history.push('/login')
  }
  
  return (
    <div>
      <p>Home的内容</p>
      <button onClick={handleBack}>返回登录页面按钮</button>
    </div>
  )
}

/*class Approuter extends React.Component{
  
  render() {
    return {
      <Router>
        <div>
          <h1>reaet-router-dom</h1>
          <Link to='/first'>页面一</Link>
          <Route path='/first' component={First}></Route>
    
        </div>
      </Router>
    }
  }
}*/

const AppRouter = () => (
  <Router>
    <div>
      <h1>reaet-router-dom</h1>
      <Link to='/login'>去登录页面</Link>
      <br/>
      <br/>
      
      {/*精确匹配，Route元素添加exact*/}
      {/*模糊匹配，只要to方法的pathName以path任意值开头，*/}
      {/*就会匹配成功，path方法的path最前面的值与to方法最接近就与谁匹配*/}
      <Route exact path='/login' component={Login}/>
      <Route exact path='/home' component={Home}/>
    </div>
  </Router>
)



export default AppRouter;