import React, {Component,Fragment} from 'react'
import CounterButton from './CounterButton';
import CounterDisplay from './ConunterDisplay';


export default class Counter extends Component{

constructor(){
    super()

    this.state ={
        count:0
    }

}
increase = (amount) =>{



    this.setState(
        {count:this.state.count+amount}

    )

}



render(){

    return(
        <Fragment>
             <h1>{this.state.count}</h1>   
            <CounterDisplay count={this.state.count}></CounterDisplay>
            <CounterButton fn={this.increase} amount={1} text={"INCREASE"}></CounterButton>
            <CounterButton fn={this.increase} amount={-1} text={"DECREASE"}></CounterButton>
        </Fragment>
    )


}

}