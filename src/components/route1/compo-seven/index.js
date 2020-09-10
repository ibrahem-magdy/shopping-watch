import React from "react"
import "./style.scss"

export default function C_seven(props){
    const {seven}=props;
    const result=seven.map(res=>{
        return(
            <div className="col-lg-4 con-i-h3-p" key={Math.random()}>
                <i class={res.icon}></i>
                <h3>{res.h3}</h3>
                <p>{res.p}</p>
            </div>
        )
    })
    return(
        <div className="section-seven">
            <div className="container">
                <div className="row">
                    {result}
                </div>
            </div>
        </div>
    )
}