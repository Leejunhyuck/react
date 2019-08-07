import React,{Component} from 'react'
import PrintName from './PrintName';

export default class Ex1 extends Component{

    render(){

        const arr =[{pcode:1,pname:'연필',price:100},
                    {pcode:2,pname:'노트',price:800},
                    {pcode:3,pname:'샤프',price:1000},
                    {pcode:4,pname:'축구공',price:13000},]

        return(


            <div>
                <printArr arr={arr}></printArr>
                <PrintName name={"hong gil dong"}></PrintName>
            </div>
        )


        }    



}