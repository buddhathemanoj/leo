import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Leo=()=>{
    return(
        <div>
            <h1>LEO</h1>
           <div >
             <NavLink className="marginright" to="/about">About</NavLink>
             <NavLink className="marginright" to="/Interaction">Interaction</NavLink> 
             <NavLink className="marginright" to="/Branding">Branding</NavLink>
            <NavLink className="marginright" to="/brand">Brand</NavLink>
            <NavLink className="marginright" to="/Blockchain">Blockchain</NavLink>
            <NavLink className="marginright" to="/Design">Design</NavLink>
            <NavLink className="marginright" to="/chatgpt">Chatgpt</NavLink>
            <NavLink className="marginright" to="/design">Designn siva</NavLink> 
           </div>
                     
         
     
        </div>
    )
}