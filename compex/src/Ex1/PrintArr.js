import React from 'react'

const PrintArr = ({arr}) =>{


const result = arr.map((obj,idx)=>{

    <li key={idx}>{obj}</li>
})


retrun (
    <ul>
        <li>
           {result}
        </li>



    </ul>



)


}

export default PrintArr