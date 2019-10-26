import React from 'react';

import {connect} from 'react-redux'

const TodoList = (props)=>{
    let {inputValue,inputChange,clickButton,list} = props
        return (
            <div>
                <div style={{margin: 10}}>
                    <input 
                        value={inputValue} 
                        onChange={inputChange}
                    />
                    <button onClick={clickButton}>提交</button>
                    <ul>
                        {
                            list.map((item,index)=>{
                                return(<li key={index} >{item}</li>)
                            })
                        }
                    </ul>
                   
                </div>
            </div>
         );

}
// class ToduList extends Component {
    
//     render() {
//         let {inputValue,inputChange,clickButton} = this.props
//         return (
//             <div>
//                 <div style={{margin: 10}}>
//                     <input 
//                         value={inputValue} 
//                         onChange={inputChange}
//                     />
//                     <button onClick={clickButton}>提交</button>
//                     <ul>
//                         {
//                             this.props.list.map((item,index)=>{
//                                 return(<li key={index} >{item}</li>)
//                             })
//                         }
//                     </ul>
                   
//                 </div>
//             </div>
//          );
//     }
// }

const stateProps = (state)=>{
    return {
        inputValue: state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch)=>{
    return {
        inputChange(e){
            const action={
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickButton(){
            const action={
                type:'add_item'
            }
            dispatch(action)
        },
        deleteItem(index){
            console.log(index)
        }
    }
}

 
export default connect(stateProps,dispatchToProps)(TodoList);