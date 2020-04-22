import React from "react"
class Inp extends React.Component{
    constructor(){
        super();
        this.state={
            text:""
        }
    }
    change(e){
        this.setState({
            text:e.target.value
        })
    }

    add(){
    //    console.log(this.props.store) 
    this.props.store.dispatch({type:'ADD',text:this.state.text})
    }
    render(){  
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.change.bind(this)} />
                <button  onClick={this.add.bind(this)}>添加</button>
            </div>
        )
    }

}
export default Inp