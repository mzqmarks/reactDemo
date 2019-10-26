import React, { Component } from 'react';
import propTypes from 'prop-types'
class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    // 组建更新之前自动执行
    shouldComponentUpdate(nextProps,nextState){
        // console.log(nextProps)
        // console.log(nextState)

        if(nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
       
    }
    
    render() {
        console.log('child-rednder')
        return (
            <li onClick = {this.handleClick}>
                {this.props.avname}为你做 - {this.props.content}
            </li>
          );
          
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes = {
    // 名称是必须要传递的
    avname:propTypes.string.isRequired,
    content: propTypes.string,
    deleteItem: propTypes.func,
    index:propTypes.number
}
// 使用默认值defaultProps
XiaojiejieItem.defaultProps = {
    avname:'松岛枫'
}
 
export default XiaojiejieItem;