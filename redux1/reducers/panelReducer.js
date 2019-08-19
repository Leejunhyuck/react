
const initialState={
    current:"All"

}

function panelReducer(state=initialState,action){
    console.log('panelReducer',state,action)

    let newState = state

    const {type,payload} =action
    
    if(type==='change'){
        newState ={current:payload}
    }


    return newState


}
export default panelReducer