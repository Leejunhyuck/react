import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import TodoList from './views/Todo/TodoList';
import Main from './views/Main';
import MyPage from './views/MyPage';


export default class App extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      
      <div>
        <h1><a href='/mypage'>MyPage</a></h1>
        <Router>          
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>  
              <Link to="/mypage">MyPage</Link>
            </li>
            <li>
              <Link to="/todoList/1">TodoList</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Main} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/todoList/:page" component={TodoList} />        
        </Router>
      </div>
      
    )
  }
}
