// 引入actionTypes.js 文件
import {GET_My_LIST,CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
// import axios from 'axios'
export const changeInputAction = (value)=> ({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=> ({
    type:ADD_ITEM
    
})

export const deleteItemAction = (index)=> ({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data)=> ({
    type:GET_LIST,
    data
})

// export const getToduList = ()=>{
//     return (dispatch)=>{
//         axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
//         .then((res)=>{
//             const data = res.data
//             const action = getListAction(data)
//             dispatch(action)
          
//         })
       
//     }
// }

export const getMyListAction = ()=> ({
    type: GET_My_LIST
})