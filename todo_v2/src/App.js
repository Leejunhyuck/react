import React, {Component} from 'react';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import Todo from './pages/Todo';
import {BrowserRouter as Router, Route,Link,Redirect } from 'react-router-dom'

export default class App extends Component{

  constructor(){
    super()
    this.state = {user:null}
  }

  doLogin = (userobj) =>{
    console.log(userobj)
    this.setState({user:userobj})
  }

  render() {

    return (
      <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Main</Link></li>
            {this.state.user != null ? 
              <li><Link to="/mypage">MyPage</Link></li>
              : 
              <div></div>
            }
            
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/todo">Todo</Link></li>
          </ul>
        </nav>
        <Route path="/" exact component={Main}></Route>
        <Route path="/mypage" exact render={() =>
          this.state.user != null? 
            <MyPage></MyPage>
            :
            <Redirect to="/login"></Redirect>
         }></Route>


        <Route path="/login" exact component={() => <Login doLogin={this.doLogin} />}></Route>
        <Route path="/todo" exact component={Todo}></Route>
      </div>
      </Router>
    );
  }
}
