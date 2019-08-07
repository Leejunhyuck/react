import React,{Component} from 'react'
import TodoList from './TodoList';
import Todoinput from './TodoInput';

export default class Todo extends Component{

    static count =3;

    constructor(){
        super()
        
        this.state = {

            todos:[{tno:1,title:'todo1'},
            {tno:2,title:'todo2'},{tno:3,title:'todo3'}]
        }





    }

    addTodo=(title) =>{
        const arr = this.state.todos

       arr.push({tno:++Todo.count,title:title})
        this.setState(

            {todos:arr}

        )

    }

    render(){

        return(
            <div style={backgroundColor}>
                <h1>Todo</h1>
                <Todoinput add={this.addTodo}></Todoinput>
                <TodoList todos={this.state.todos}></TodoList>
            </div>

        )


    }

    


}

const backgroundColor = {
    backgroundColor:'green',
    display:'flex',
    height:'20em',
    flexDirection:'column'

}