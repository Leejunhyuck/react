import React,{Component} from 'react'


export default class CountDisplay extends Component{
	state ={count:1}
    
    increase=() =>{

        console.log("increase..")
        this.setState({count:this.state.count+1})
    }   


	render(){

	return(
        <div>
		<h1>Count:{this.state.count}</h1>
        <CountButton fn={this.increase}></CountButton>
        </div>
	)
}

}