import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(reducer,enhancer) //创建数据库存储仓库
sagaMiddleware.run(mySagas)

export default store