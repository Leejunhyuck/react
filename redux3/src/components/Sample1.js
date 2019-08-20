import React from 'react'
import {connect} from 'react-redux'
import App from '../App';
import { fetchFn } from '../reducers/s1Reducer';


function Sample1(props){

    const doClick = () =>{
      // props.dispatch({type:'start_loading'})
      props.dispatch(fetchFn)
    }

    // const doClick = () =>{
    //     // props.dispatch({type:'start_loading'})
    //     props.dispatch(()=>{
  
    //       props.dispatch({type:'start_loading'})
          
    //       setTimeout(()=>{
    //           console.log("test---2")
    //           props.dispatch({type:'end_loading'})
    //       },3000)
    //     })
    //   }


    return(
        <div>
        <h1>Sample1</h1>
        <h2>Current : {props.text}</h2>
        <button onClick={doClick}>CLICK</button>
        </div>
    )


}

const mapStateToProps=(state)=>{

    const text1 = state.s1Reducer.text1

    return {text:text1}
    }

export default connect(mapStateToProps)(Sample1)