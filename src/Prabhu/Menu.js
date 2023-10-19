import react from "react";
import '../Prabhu/Menu.css'
import { Link } from "react-router-dom";
import  zoho from './zoho.png'

export const Menu =()=> {
    return(
        <div className="tp">
            <div>
            <img className="zoho" src={zoho} alt="zoho"/>
            </div>
            <div className="te">
                <Link to='Products'><p className="pro"><b>Products..></b></p></Link>
                <Link to='Customers'><p className="pro"><b>Customers..></b></p></Link>
                <Link to='Company'><p className="pro"><b>Company..></b></p></Link>
                <Link to='...'><p className="pro"><b>...</b></p></Link>
                
                <button type="Submit" className="sb">Sign up</button>
            </div>
        </div>
        
    )
}