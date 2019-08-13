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


    changeComplete = (tno) =>{

        console.log(tno)

        const target = this.state.todos.filter(obj => obj.tno === tno)[0]
        const index = this.state.todos.indexOf(target)

        const tempArr = this.state.todos

        tempArr[index] = Object.assign(target, {complete: !target.complete})

        console.log(tempArr)

        this.setState({todos:tempArr})




    }


    addTodo=(title) =>{
        const arr = this.state.todos

       arr.push({tno:++Todo.count,title:title,complete:false})
        this.setState(

            {todos:arr}

        )

    }

    render(){

        return(
            <div style={backgroundColor}>
                <h1>Todo</h1>
                <Todoinput add={this.addTodo}></Todoinput>
                <TodoList todos={this.state.todos} change={this.changeComplete}></TodoList>
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