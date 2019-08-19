import React from 'react'

import {connect} from 'react-redux'

const style = {

    color:"red",
    margin:"2em",
    backgroundColor:"white"    
}

const spanStyle={
    padding:"2em"


}



function ControlPanel(props){

    const changePannel = (target) =>{

        console.log("target : "+target)
        props.dispatch({type:"Change",payload:target})
    }


    return(
        <div style={style}>
            <span style={spanStyle} onClick={() => {changePannel('ALL')}}>ALl</span>
            <span style={spanStyle} onClick={() => {changePannel('A')}}>Apage</span>
            <span style={spanStyle} onClick={() => {changePannel('B')}}>Bpage</span>
            <span style={spanStyle} onClick={() => {changePannel('C')}}>Cpage</span>

        </div>


    )

}
export default connect()(ControlPanel)