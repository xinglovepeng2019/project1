import React from "react"
class Inp extends React.Component{
   
    del(index){
        this.props.store.dispatch({type:'DEL',index})
    }

    update(index){
        this.props.store.dispatch({type:'UPDATE',index,text:"我是修改的值"})
    }
    
    render(){  
        return (
            <div>
                <ul>
                    {
                        this.props.todoArr.map((item,index)=>{
                            return (<li key={index}>
                                {item}
                                <button onClick={this.del.bind(this,index)}>删除</button>
                                <button onClick={this.update.bind(this,index)}>修改</button>
                                </li>)
                        })
                    }
                </ul>
            </div>
        )
    }

}
export default Inp