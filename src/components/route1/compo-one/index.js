import React from "react"
import {Link} from "react-router-dom"
import img from "../../../img/hero/watch.png"
import "./style.scss"
 function C_one (){
    return(
    <div className="section-one">
        <div className="container">
                    <div className="right-header">
                          <ul className="con-search">
                              <li><a href="#"><i className="fa fa-search"></i></a></li>
                              <li><a href="#"><i className="fa fa-user"></i></a></li>
                              <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                          </ul>
                      </div>
            <div className="row">
                <div className="col-lg-7 col-sm-6 cent">
                    <div className="con-h2-p">
                        <h2>Select Your New Perfect Style</h2>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                            <Link to="/shop">
                                <button>
                                    
                                <div className="cover"></div>
                                </button>
                                
                            </Link>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-6">
                    <img src={img}/>
                </div>
            </div>
        </div>

    </div>
    )
  
}
export default C_one