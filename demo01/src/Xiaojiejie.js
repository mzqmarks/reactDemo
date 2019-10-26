import React,{Component,Fragment} from 'react'
import axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import './style.css'

import {CSSTransition , TransitionGroup} from 'react-transition-group'


 class Xiaojiejie extends Component{
     constructor(props){
         super(props)
         this.state = {
            // 获取input中的值
             inputValue:'jspang',
            //  服务列表
            list:[]

         }
     }
     componentDidMount(){
         axios.get('https://www.easy-mock.com/mock/5c04ed3105e43a1957ae8c2b/example/reactdemo01')
         .then((res)=>{
             console.log(JSON.stringify(res))
             this.setState({
                 list: res.data.data
             })
         })
         .catch((error)=>{
             console.log(error)
         })
            
     }
     render(){
         return (
             <Fragment>
                <div>
                    <label htmlFor="addfw" >加入服务：</label>
                     <input 
                        id="addfw" 
                        value={this.state.inputValue}  
                        onChange={this.inputChange.bind(this)}
                        ref = {(input)=>{this.input = input}}
                    /> 
                     <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                 <ul ref={(ul)=>{this.ul = ul}}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <CSSTransition
                                        timeout={500}
                                        classNames = "boss-text"
                                      
                                        appear = {true}
                                        key = {index+item}
                                    >
                                        <XiaojiejieItem
                                            content={item}
                                            key = {index+item}
                                            index = {index}
                                            deleteItem = {this.deleteItem.bind(this)}
                                            //  avname = '波多野结衣'
                                        />
                                    </CSSTransition>
                                    
                                )
                            })
                        }
                    </TransitionGroup>
                     {/* <li>头部按摩</li>
                     <li>精油推背</li> */}
                 </ul>
                 <Boss />
             </Fragment>

         )
     }

    //  inputChange 方法获取和改变input中的值
    inputChange(){
        // console.log(this)
        // console.log(e.target.value)
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue: this.input.value
        })
    }

    // 点击把输入input中的值添加刀list中
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        },
        // ()=>{
        //     // 绑定ref获取li数量时要用这种方法
        //     console.log(this.ul.querySelectorAll('li').length)
        // }
        )
        
        
    }

    //点击删除列表项
    deleteItem(index){
        // console.log(index)
        let newlist = this.state.list
        newlist.splice(index,1)
        this.setState({
            list:newlist
        })
        

    }


    
}
export default Xiaojiejie