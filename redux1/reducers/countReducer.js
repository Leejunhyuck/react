

function countReducer(state ={count:10},action){

    console.log("-----------",action)

    let newState = state

    const {type} = action

    if(type=='INC'){

        newState = {count:state.count+1}
    }

    return newState
}

export default countReducer