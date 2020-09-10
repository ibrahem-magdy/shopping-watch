import React from "react"
import { Link } from "react-router-dom"
import "./style.scss"
export default function C_two (props){
const {two}=props
const results=two.map(res=>{
    return(
        <div className="col-lg-4 col-sm-6">
            <div className="con-img">
                <img src={res.img}/>
            </div>
            <h3><Link to="/special-shoping">{res.name}</Link></h3>
            <p>{res.price}</p>
        </div>
    )
})
return(
    <div className="section-two">
        <div className="container">
            <h2>New Arrivals</h2>
            <div className="row">
                {results}
            </div>
        </div>
    </div>
)
}