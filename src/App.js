import React, { Component } from 'react';
import {BrowserRouter,Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Collection from "./components/route1/collection";
import './App.scss';
import "./media.scss"
class  App extends  Component {
    state={
        drop_parent:false,
        drop_child_one:false,
        drop_child_two:false
    }
  render(){
    return (
        <div className="App">
          <BrowserRouter>
              <div className="nav">
                  <div className="container">
                      <div className="con-nav">
                          <div className="logo">Watch <span>Shop</span></div>
                         
                          {/* drop-nav */}
                          <div class={this.state.drop_parent?"nav-drop height":"nav-drop"}>
                                <ul className="ul-drop">
                                    <li><Link exact to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li className="icon-one"onClick={()=>{this.setState({drop_child_one:!this.state.drop_child_one})}}>Blog       +
                                        <ul className={this.state.drop_child_one?"ul-drop-blog height2":"ul-drop-blog"}>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/blog-details">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="icon-two"onClick={()=>{this.setState({drop_child_two :!this.state.drop_child_two})}}>Pages       +
                                        <ul className={this.state.drop_child_two?"ul-drop-pages height3":"ul-drop-pages"}>
                                            <li><Link to="/login">Log In</Link></li>
                                            <li><Link to="/cart">Cart</Link></li>
                                            <li><Link to="/element">Element</Link></li>
                                            <li><Link to="/confirmation">Confirmation</Link></li>
                                            <li><Link to="product-checkout">Product Checkout</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                          </div>
                          <ul className="ul-nav">
                              <li><Link exact to="/">Home</Link></li>
                              <li><Link to="/shop">Shop</Link></li>
                              <li><Link to="/about">About</Link></li>
                              <li className="ul-nav-two"><Link to="/blog" >Blog
                              </Link>
                              
                                  <div className="box-ul-nav-two">
                                      <ul>
                                          <li><a href="#">Blog</a></li>
                                          <li><a href="#">Blog Details</a></li>
                                      </ul>
                                  </div>
                            
                          </li>
                              <li className="ul-nav-three">
                                  <a href="#" >Pages
                                      
                                  </a>
                                  
                                      <div className="box-ul-nav-three">
                                          <ul>
                                              <li><a href="#">Login</a></li>
                                              <li><a href="#">Cart</a></li>
                                              <li><a href="#">Element</a></li>
                                              <li><a href="#">Confirmation</a></li>
                                              <li><a href="#">Product Checkout</a></li>
                                          </ul>
                                  </div>
                          </li>
                              <li><a href="#">Contact</a></li>
                          </ul>
                          <div className="search">
                              <ul className="con-search">
                                  <li><a href="#"><i className="fa fa-search"></i></a></li>
                                  <li><a href="#"><i className="fa fa-user"></i></a></li>
                                  <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div class="menu"><i class="fas fa-bars" onClick={()=>{this.setState({drop_parent :!this.state.drop_parent})}}></i></div>
                      </div>
                  </div>
              </div>
    
              <Route exact path="/" component={Collection}></Route>
        </BrowserRouter>
        </div>
      );
  }
 
}

export default App;
