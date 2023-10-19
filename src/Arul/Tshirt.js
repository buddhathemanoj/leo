import React from "react";
import "./Tshirt.css";

import otto from './otto.png'
import Tshirt1 from './Tshirt1.jpg'
import Tshirt2 from './Tshirt2.jpg'
import Tshirt3 from './Tshirt3.jpg'
import Tshirt4 from './Tshirt4.jpg'

import { NavLink } from "react-router-dom/dist";
import { Menubar } from "./Menubar";

export const Tshirt =()=>{
    return(
       <>
       <Menubar/>
            <div className="body">

            
         
         <br></br><br></br>
            <h1>Otto</h1>
            <span className="ts"><h3>( TSHIRTS )</h3></span><br></br>

          

<div className="dress1">


    <div className="men1"><img src={Tshirt1} alt="dress1"/>
  
    OTTO - Blue Checkered Casual Shirt. Trim <br></br> Fit - OSYTG7_1<br></br> <span className="a">OTTO</span>
    <br></br><br></br><span className="rs">Rs:1,795.00</span></div>

    <div className="men2"><img src={Tshirt2} alt="dress2"/>
   
    OTTO - Blue Checkered Smart Work Wear <br></br> Shirt.Slim Fit - AWOGSWW047_BLUE<br></br><span className="a">OTTO</span>
    <br></br><br></br><span className="rs">Rs:1,695.00</span></div>

    <div className="men3"><img src={Tshirt3} alt="dress3"/>
    
    OTTO - Grey Checkered Smart Work Wear<br></br>  Shirt. 
    Slim Fit - AWOGSWW043_GREY<br></br> <span className="a">OTTO</span>
    <br></br><br></br><span className="rs">Rs:1,695.00</span></div>

    <div className="men4"><img src={Tshirt4} alt="dress4"/>
   
    OTTO - Green Checkered Smart Work Wear Shirt.<br></br>  Slim Fit - AWOGSWW043_GREEN<br></br> <span className="a">OTTO</span>
    <br></br><br></br><span className="rs">Rs:1,695.00</span></div>
</div>


            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
             integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
             crossorigin="anonymous" referrerpolicy="no-referrer" />


<button className="add"><i class="fa-solid fa-gift"></i>Rewards</button>
            </div>
       </>
   
            )
            }