import {takeEvery, put} from 'redux-saga/effects'
import { GET_My_LIST } from './actionTypes';
import {getListAction} from './actionCreators'
import axios from 'axios'
function* mySaga() {
    yield takeEvery(GET_My_LIST,getList)
}

function* getList(){
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    //     .then((res)=>{
    //         const data = res.data
    //         const action = getListAction(data)
    //         dispatch(action)
          
    //     })
    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    const action = getListAction(res.data)
    yield put(action)
}
export default mySaga;