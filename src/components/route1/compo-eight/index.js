import React from "react"
import "./style.scss"
export default function C_eight(props){
    const {eight,icons}=props;
    const result1=eight.map(res1=>{
        return(
            <div class="col-lg-3 con-links">
                <h3>{res1.h3}</h3>
                <ul>    
                   <li><a href="#">{res1.lone}</a></li>
                    <li><a href="#">{res1.ltwo}</a></li>
                    <li><a href="#">{res1.lthree}</a></li>
                    <li><a href="#">{res1.lfour}</a></li>
                </ul>
           
            </div>
        )
    })
    const result2=icons.map(res2=>{
        return(
           
                <li><i className={res2.ione}></i></li>
            
        )
    })
    return(
        <div className="section-eight">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h3>Watch Shop</h3>
                        <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
                    </div>
                    {result1}
                </div>
                <div className="copy-social">
                    <p>copyright&copy;<span>Ibrahem magdy</span> 2020</p>
                    <ul>
                         {result2}
                    </ul>
                </div>
            </div>
        </div>
    )
}