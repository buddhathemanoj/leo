import React from "react";
import "./Interaction.css";
import { Link } from "react-router-dom/dist";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import im1 from './im1.jpg'
import im2 from './im2.jpg'
import im3 from './im3.jpg'
import im4 from './im4.jpg'
import { NavLink } from "react-router-dom/dist";
import { Menubar } from "./Menubar";

export const Interaction = () => {
    return (
        <>
            <Menubar />
            <div className="body">



                <br></br><br></br>
                <h1>Otto</h1><br></br><br></br><br></br><br></br>

                <div className="dress1">


                    <div className="men1"><img src={im1} alt="dress1" />

                        OTTO - Blue Checkered Casual Shirt. Trim <br></br> Fit - OSYTG7_1<br></br> <span className="a">OTTO</span>
                        <br></br><br></br><span className="rs">Rs:1,795.00</span></div>

                    <div className="men2"><img src={im2} alt="dress2" />

                        OTTO - Blue Checkered Smart Work Wear <br></br> Shirt.Slim Fit - AWOGSWW047_BLUE<br></br><span className="a">OTTO</span>
                        <br></br><br></br><span className="rs">Rs:1,695.00</span></div>

                    <div className="men3"><img src={im3} alt="dress3" />

                        OTTO - Grey Checkered Smart Work Wear<br></br>  Shirt.
                        Slim Fit - AWOGSWW043_GREY<br></br> <span className="a">OTTO</span>
                        <br></br><br></br><span className="rs">Rs:1,695.00</span></div>

                    <div className="men4"><img src={im4} alt="dress4" />

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
/* <NavLink to="/Interaction">Interaction</NavLink> */
/* <Route path="/Interaction" element={<Interaction />} />
          <Route path="/Tshirt" element={<Tshirt/>} />
          <Route path="/NEWARRIVALS" element={<NEWARRIVALS/>} />} */