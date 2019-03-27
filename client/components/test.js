import 'whatwg-fetch'
import 'es6-promise'
import React,{Component} from 'react'
class GetArticle extends Component{

    constructor(props){
        super(props)
        this.state ={datas:null}
    }

    componentWillMount(){
        fetch('/home',{
            method:'GET',
            mode:"cors",
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
        }).then(
             Response=>Response.json()
        ).then(result=>{
            //获取数据
            this.setState({datas:result})
            console.log('test ok!')
            console.log('result: ',result);
        }).catch(function(e){
            console.log('e: ',e)
            console.log('fetch fail');
        });
        
    }

    render(){
        return (
            <div>
                {this.state.datas}
            </div>
        )
    }

}

export default GetArticle