import React from "react"
import {getCode} from  './code.js'

class App extends React.Component{
   constructor(){
       super();
       this.state={
           phone:"",
           code:"",
           captMsg:"发送验证码",
           captCode:20

       }
   }
   changephone(e){
       this.setState({
           phone:e.target.value
       })
   }
   changecode(e){
    this.setState({
        code:e.target.value
    })
   }
 
    sendCode(){
        const {phone,code}=this.state;
        // 1:手机号不为空的情况
        if(phone !==""){
        //    生成验证码
        let  code=getCode();
        console.log(code,"code")
        // 发送到手机上---接口  花钱
        
        localStorage.setItem('code',code)


        //   2:启动定时器---改变按钮的内容
           
           let timer=setInterval(()=>{
            //   3:让 captCode自减1
                 this.setState({
                    captCode:this.state.captCode-1
                 })
            //    4：this.state.captCode不能一直减下去
                 if(this.state.captCode<=0){
                     localStorage.setItem('code',"")
                     clearInterval(timer);
                     this.setState({
                        captMsg:"发送验证码",
                        captCode:20
                       })
                 }else{
                   this.setState({
                    captMsg:this.state.captCode 
                   }) 
                 }


           },1000)

        }
    }

    fn(){  //提交时
        if(this.state.code!==localStorage.getItem('code')){
            alert("验证码不正确")
        }else{
            alert("验证码正确")
        }
    }
    render(){  
        let {phone,code,captMsg} = this.state;
        return (
            <div>
               手机号:<input type="text" value={phone} onChange={(e)=>{this.changephone(e)}} />
               <br/>
               <input type="text" value={code} onChange={(e)=>{this.changecode(e)}} /> 
        <button onClick={()=>{this.sendCode()}}>{captMsg}</button>
               <br/>
               <button onClick={()=>{this.fn()}}>提交</button>
            </div>
        )
    }

}

export default App