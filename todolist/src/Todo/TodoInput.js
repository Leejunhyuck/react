import React, {Component} from 'react'

export default class Todoinput extends Component {

constructor(props){
    super(props)
    this.add = props.add
    this.state={
        text:''

    }


}

sendData=(event)=>{
    console.log("send"+ this.state.text)
    this.add(this.state.text)
    this.setState({text:""})
}

setText = (event) => {

    this.setState({text:event.target.value})

}

render(){
    return(

        <div>
            <input type='text' onChange={this.setText} value={this.state.text}></input>
            <button onClick={this.sendData}>ADD</button>

        </div>



    )


}





}