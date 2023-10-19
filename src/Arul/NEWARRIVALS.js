import React from "react";
import "./Newarr.css";

import otto from './otto.png'
import newdrs1 from './newdrs1.jpg'
import newdrs2 from './newdrs2.jpg'
import newdrs3 from './newdrs3.jpg'
import newdrs4 from './newdrs4.jpg'

import { NavLink } from "react-router-dom/dist";

export const NEWARRIVALS =()=>{
    return(
       
        <div className="body">

            <div className="meu1">Free shipping for Paid order over <span className="clr">₹899</span></div>
            <div className="menubar">
            <div className="search"><NavLink><i class="fa-solid fa-magnifying-glass"></i></NavLink></div>
            <ul>
                <li><NavLink className="a" to='NEWARRIVALS'>NEW ARRIVALS</NavLink> </li>
                <li><NavLink className="a" to='/SHIRTS'>SHIRTS</NavLink></li>
                <li><NavLink className="a" to='/Tshirt'>T SHIRTS</NavLink> </li>
                <img src={otto} alt="ottologo"/>
               
                <li><NavLink className="a" to='/TROUSERS'>TROUSERS</NavLink>  </li>
                <li><NavLink className="a" to='/INNERWEAR'>INNERWEAR</NavLink> </li>
                <li><NavLink className="a" to='/ESSENTILS'>ESSENTILS</NavLink> </li>
                <li><NavLink className="a" to='/STORELOCATOR'>STORE LOCATOR</NavLink> </li>
           
              
            </ul>
            
          
            </div><br></br><br></br>
            <h1>New Arrival Shirts</h1>
            <br></br><br></br>

          

<div className="dress1">


    <div className="men1"><img src={newdrs1} alt="dress1"/>
  
    OTTO - Blue Checkered Casual Shirt. Trim <br></br> Fit - OSYTG7_1<br></br> <span className="a">OTTO</span>
    <br></br><br></br><span className="rs">Rs:1,795.00</span></div>

    <div className="men2"><img src={newdrs2} alt="dress2"/>
   
    OTTO - Blue Checkered Smart Work Wear <br></br> Shirt.Slim Fit - AWOGSWW047_BLUE<br></br><span className="a">OTTO</span>
    <br></br><br></br><span className="rs">Rs:1,695.00</span></div>

    <div className="men3"><img src={newdrs3} alt="dress3"/>
    
    OTTO - Grey Checkered Smart Work Wear<br></br>  Shirt. 
    Slim Fit - AWOGSWW043_GREY<br></br> <span className="a">OTTO</span>
    <br></br><br></br><span className="rs">Rs:1,695.00</span></div>

    <div className="men4"><img src={newdrs4} alt="dress4"/>
   
    OTTO - Green Checkered Smart Work Wear Shirt.<br></br>  Slim Fit - AWOGSWW043_GREEN<br></br> <span className="a">OTTO</span>
    <br></br><br></br><span className="rs">Rs:1,695.00</span></div>
</div>


            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
             integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
             crossorigin="anonymous" referrerpolicy="no-referrer" />


<button className="add"><i class="fa-solid fa-gift"></i>Rewards</button>
            </div>
            )
            }