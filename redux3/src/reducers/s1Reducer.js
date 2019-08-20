
export const fetchFn =(dispatch)=>{

    dispatch({type:'start_loading'})
    
    setTimeout(()=>{
        console.log("test---2")
       dispatch({type:'end_loading'})
    },3000)
  }

function s1Reducer(state={text1:''},action){

    console.log("s1Reducer.....",action)

    let newState = state

    const {type} = action

    if(type==='start_loading'){
        newState={text1:"로딩 중"}

    }else if(type==="end_loading"){

        newState={text1:"로딩 완료"}
    }
    


    return newState

}
export default s1Reducer