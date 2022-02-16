import React from 'react';
import PropTypes from 'prop-types';

const {Provider, Consumer} = React.createContext()

const SubChildren = props => {
  
  // props.children是子节点，可以是函数，组件，文本，react元素
  console.log(props.children);
  
  const arr = props.color
  const lis = arr.map((item, index) => <li key={index}>{item}</li>)
  return(
    <div>
      <Consumer>{data => <span>我是子节点--{data}</span>}</Consumer>
      {props.children}
      <ul>
        {lis}
      
      </ul>
      <p>{props.optionalObjectWithShape.fontSize}</p>
      <p>{props.pageSize}</p>
    
    </div>
  )
}
// props校验
// props属性约定，可以shape，可以说isRequired
SubChildren.propTypes = {
  color: PropTypes.array,
  optionalObjectWithShape: PropTypes.shape({
    fontSize: PropTypes.number.isRequired
  })
}
// props默认值
SubChildren.defaultProps = {
  pageSize: 6666
}


const Children = (props) =>{
  
  /*function handleClick() {
    props.getMsg(1)
  }*/
  const handleClick = () => {
    props.getMsg(1)
  }
  
  const arrr= [
    'red'
  ]
  
  return (
    <Provider value={1}>
      <div>
        <SubChildren color={arrr} optionalObjectWithShape={{fontSize: 1}} pageSize={3333}>
          <p>我是子节点</p>
        </SubChildren>
      </div>
    </Provider>
  )

}

export default Children