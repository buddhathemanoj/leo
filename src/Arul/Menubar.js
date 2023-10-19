import React from "react";
import { NavLink } from "react-router-dom/dist";
import otto from './otto.png'

export const Menubar = ()=>{
    return(
        <div className="menubar">
            <div className="meu1">Free shipping for Paid order over <span className="clr">₹899</span></div>
        <div className="search "><NavLink><i class="fa-solid fa-magnifying-glass"></i></NavLink></div>
        <ul>
            <li><NavLink className="a" to='/NEWARRIVALS'>NEW ARRIVALS</NavLink> </li>
            <li><NavLink className="a" to='/SHIRTS'>SHIRTS</NavLink></li>
            <li><NavLink className="a" to='/Tshirt'>TSHIRT</NavLink> </li>
            <img src={otto} alt="ottologo"/>
            <li><NavLink className="a" to='/TROUSERS'>TROUSERS</NavLink>  </li>
            <li><NavLink className="a" to='/INNERWEAR'>INNERWEAR</NavLink> </li>
            <li><NavLink className="a" to='/ESSENTILS'>ESSENTILS</NavLink> </li>
            <li><NavLink className="a" to='/STORELOCATOR'>STORE LOCATOR</NavLink> </li>
          
          
        </ul>
        
      
        </div>
    )
}