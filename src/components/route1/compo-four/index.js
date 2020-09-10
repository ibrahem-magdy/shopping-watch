import React,{Component} from "react"
import "./style.scss"
import { Link } from "react-router-dom"
export default class C_four extends Component{
    
    render(){
        const {four}=this.props
        const results=four.map(res=>{
            return(
                <div className="col-lg-4 col-sm-6">
                    <figure>
                        <div className="con-img">
                            <div className="img-size">
                                <img src={res.image}/>
                            </div>
                            <div className="add">
                                <span>Add to cart</span>
                            </div>
                        </div>
                        <h3><Link to="/special-shoping">{res.name}</Link></h3>
                        <span>{res.price}</span>
                    </figure>
                </div>
            )
        })
        return(
            <div className="section-four">
                <div className="container">
                    <h2>Popular Items</h2>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    <div className="row">
                        {results}
                    </div>
                    <Link to="/shop">
                        <button>
                        <div className="cover"></div>
                        </button>
                        
                    </Link>
                </div>
            </div>
        )
    }
}