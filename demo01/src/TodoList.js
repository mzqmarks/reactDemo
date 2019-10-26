import React, { Component } from 'react';
// 引入store 
import store from './store'

// 引入actionTypes.js 文件
// import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './store/actionTypes'

import {getMyListAction,changeInputAction,addItemAction,deleteItemAction} from './store/actionCreators'
import TodoListUi from './TodoListUi'


// const data = [
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        // console.log(store.getState())
        // 订阅redux的状态关键代码
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        
    }
    render() { 
        return ( 
          <TodoListUi
            inputValue = {this.state.inputValue}
            list = {this.state.list}
            changeInputValue = {this.changeInputValue}
            clickBtn = {this.clickBtn}
            deleteItem = {this.deleteItem}
          />
         );
    }

    componentDidMount(){
    //    const action =  getToduList()
    //    store.dispatch(action)

        const action = getMyListAction()
        store.dispatch(action)
        

    }
    changeInputValue(e) {
        // console.log(e.target.value)
        // 建立action
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)

    }
    deleteItem(index) {
        const action =deleteItemAction(index)
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }
} 

export default TodoList;