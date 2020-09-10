import React from "react"
import "./style.scss"
export default function C_three(){
    return(
        <div className="section-three">
            
                <div className="row">
                    <div className="col-lg-6 col-sm-6 mar-bottom">
                        <div className="con-img">
                            <img src="../../img/gallery/gallery1.png"/>
                            <div className="cover"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mar-bottom">
                        <div className="con-img">
                                <img src="../../img/gallery/gallery2.png"/>
                                <div className="cover"></div>
                            </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 row inside_row mar-bottom">
                            <div className="col-lg-12 col-sm-6 margin_left">
                                <div className="con-img">
                                    <img src="../../img/gallery/gallery3.png"/>
                                    <div className="cover"></div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-6 mar-bottom">
                                <div className="con-img">
                                    <img src="../../img/gallery/gallery4.png"/>
                                    <div className="cover"></div>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    )
}