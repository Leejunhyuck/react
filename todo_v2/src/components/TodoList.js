import React from 'react';
import {Link} from 'react-router-dom';




function getServerData(page){
    const jquery = window.$
    
    let resultArr =null


    jquery.ajax({
        url:"http://192.168.41.80:8080/todo/pages/"+page,
        method:'get',
        async:false,
        success:function(result){
            console.log(result)
            resultArr = result.content
        }
    })
    return resultArr
}

export default function({match}){

    const page = match.params.page

    console.log(page)
   
    const arr = getServerData(page)


    const list = arr.map(({tno,title})=>
        <li key={tno}>{title}</li>

    )

return(

   

    <div>
        <h3>Todo List {page}</h3>
        <ul>
            <li>{list}</li>

        </ul>
        <ul>
            <li>
                <Link to='/todo/list/1'>1</Link>
            </li>
            <li>
                <Link to='/todo/list/2'>2</Link>
            </li>
            <li>
                <Link to='/todo/list/3'>3</Link>
            </li>

        </ul>

    </div>


)


}