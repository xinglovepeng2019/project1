// 1:引入
import {createStore} from 'redux'


const stateDefault={
    todoArr:['123']
}

// 4:reducers处理动作，根据动作来决定如何操作state
    //  第一个参数：原始的state
    //  第二个参数：新提交过来的状态
const reducers=function(state=stateDefault,action){
   
    switch(action.type){
        case 'ADD':
          state.todoArr.push(action.text);
          console.log(state)
        break;
        case 'DEL':
            state.todoArr.splice(action.index,1)
        break;
        case 'UPDATE':
            state.todoArr[action.index]=action.text;
        break;
    }

    return state;    //返回新的状态
}


// 2:创建仓库   存储状态
const store=createStore(reducers);


// 3:导出模块store
export default store;