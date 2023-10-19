import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Leo=()=>{
    return(
        <div>
            <h1>LEO</h1>
           
                      <NavLink to="/about">About</NavLink>
             <NavLink to="/Interaction">Interaction</NavLink> 
             <NavLink to="/Branding">Branding</NavLink>
            <NavLink to="/brand">Brand</NavLink>
            <NavLink to="/Blockchain">Blockchain</NavLink>
            <NavLink to="/Design">Design</NavLink>
            <NavLink to="/chatgpt">Chatgpt</NavLink>
            <NavLink to="/design">Designn siva</NavLink> 
         
     
        </div>
    )
}