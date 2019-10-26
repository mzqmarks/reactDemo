const defaultState = {
    inputValue:'写点什么吧',
    list:[]
}
export default (state = defaultState,action) =>{
    // state  指的是原始仓库里的状态值，action指的是action新传递的状态值
    // console.log(state,action)
    if(action.type === 'changeInpute') {
        // Reducer里只能接收state，不能改变state。）,所以我们声明了一个新变量，然后再次用return返回回去
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    //增加list项
    if(action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
        newState.list.push (newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'deleteItem') {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
        newState.list.splice(action.index,1)
        return newState
    }

    if(action.type === 'getList') {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
        if(action.data.data.list) {
            newState.list = action.data.data.list
        } else {
            newState.list = [1,2,3]
        }
        
        return newState
    }
    return state
}