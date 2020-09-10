import React from "react"
import "./style.scss"
import { Link } from "react-router-dom"


export default function C_six (){
    return(
        <div className="section-six">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 con-p-h3">
                        <div>
                            <h3>Watch of Choice</h3>
                            <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                            <Link to="shop">
                                <button>
                                    <div className="cover"></div>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 mr-bottom">
                        <img src= "../../../img/gallery/choce_watch1.png"/>
                    </div>
                    <div className="col-lg-6 mr-bottom">
                         <img src="../../../img/gallery/choce_watch2.png"/>
                    </div>
                    <div className="col-lg-6 con-p-h3">
                        <div>
                                <h3>Watch of Choice</h3>
                                <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                                <Link to="shop">
                                    <button>
                                        <div className="cover"></div>
                                    </button>
                                </Link>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 