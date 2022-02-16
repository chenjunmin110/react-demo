import React from 'react'

class Comments extends React.Component{
  constructor() {
    super()
  
    this.state = {
      comments: [
        {id: 1, name: 'jack1', content: '111111aaaaaa'},
        {id: 2, name: 'jack2', content: '22222'},
        {id: 3, name: 'jack3', content: '333333'}
      ],
      userName: '',
      userContent: ''
    }
  }
  
  renderList() {
    if (this.state.comments.length === 0) return (<div className='no-comment'>暂无评论，快去评论吧</div>)
    return (
      <ul>
        {this.state.comments.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>评论内容: {item.content}</p>
          </li>
        ))}
      </ul>
    )
  }
  
  handleForm = e => {
    const { name, value} = e.target
    this.setState({
      [name]: value
    })
  }
  
  addCommemnt = () => {
    
    const { userName, userContent, comments } = this.state
    
    if (userName.trim() === '' || userContent.trim() === '') {
      alert('请输入东西')
      return
    }
    
    const newComment = [{
      id:Math.random(),
      name: userName,
      content: userContent
    },...comments]
    
    this.setState({
      comments: newComment,
      userName: '',
      userContent: ''
    })
    
  }
  
  render() {
    const { userName, userContent} = this.state
    return (
      <div className='app'>
        <div>
          <input
            type="text" className='user'
             value={userName}
              name='userName'
             placeholder='请输入评论人' onChange={this.handleForm}/>
          <br/>
          <textarea
            value={userContent}
            name="userContent" id="" cols="30" rows="10"
            placeholder='请输入评论内容' className='content'
            onChange={this.handleForm}></textarea>
          <br/>
          <button onClick={this.addCommemnt}>发表评论</button>
        </div>
        
        {/*{this.state.comments.length === 0 ? (<div className='no-comment'>暂无评论，快去评论吧</div>) :        (<ul>
          {this.state.comments.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>评论内容: {item.content}</p>
            </li>
          ))}
        </ul>)}*/}
        
        {this.renderList()}
      </div>
    )
  }
};


export default Comments;