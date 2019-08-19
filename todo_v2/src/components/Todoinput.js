import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

export default class Todoinput extends Component {

    constructor(){
        super()
        this.state = {title:null,sended:false}
    }

    addData =() => {
        axios.post(
          'http://192.168.41.80:8080/todo/new', 
          {title:this.state.title, complete: false}
        ).then(res => {
            console.log(res)
            this.setState({title:'',sended:true})
        })
    }

    render() {

        if(this.state.sended)
            


        return(
            <div>
                TITLE: <input type='text' onChange={(e) => this.state.title = e.target.value } ></input>
                <button onClick={this.addData}>ADD</button>
            </div>
        )
    }

}
