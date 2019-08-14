import React,{Component} from 'react' 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

export default class TodoList extends Component {

    constructor(props){

        super()
        console.log("constructor...")
        this.state={
            content:[],
            totalPages:0,
            loaded:false
        }
    }

   /**컴포넌트가 콘텍스트에 올라가면 실행**/ 
    componentDidMount(){
        const page = this.props.match.params.page
        this.getData(page)
        

    }

    
    getData = (page) => {

        axios.get("http://192.168.41.80:8080/todo/pages/"+page)
        .then(res =>{
            console.log(res.data)
            this.setState(Object.assign({},res.data,{loaded:true}))

        })


    }

    render(){
        console.log("render......")
        const page = this.props.match.params.page
        

        const {content,totalPages,loaded} = this.state

        const list = content.map((tno,title)=>{

            return (<li key={tno}>{title}</li>)
        })


        const linkarr = []
        for(let i=1;i<=totalPages;i++){

            linkarr.push(<Link to={`/todoList/${i}`}key={i} onClick={()=>this.getData(i)}>{i}</Link>)
        }


        return(
            <div>
                <h1>Todo List {page} </h1>
                <ul>
                    {list}
                </ul>
                <div>
                    {linkarr}
                </div>
         
            </div>
        )
    }



}