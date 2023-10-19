import React from "react";
import logo from "./logo.webp";
import "./Design.css"
import image from "./image.webp"
export const Design=()=>{
    return(
        <div style={{padding:'0 10%'}} >
            <div className="heading">
               <h1 className="about">About us</h1>
               <h3>A global leader in next-generation digital <br/>services and consulting</h3>
            </div>
            <div className="sub">
            <div className="sub1">
                <h1>56+</h1>
                <h3>countries where we have <br/>trusting clients</h3>
            </div>
            <div className="sub2">
                <h1>US$18.55</h1>
                <h3>billion total revenue (LTM)</h3>
            </div>
            <div className="sub3">
                <h1>5,575,490</h1>
                <h3>Training (days) conducted for<br/> employees, globally
                </h3>
            </div>
            </div>
            <div>
                <div>
                    <h1 className="car">Careers</h1>
                    <h3 className="sub21">Every Infoscion is the navigator of our clients’<br/> digital transformation</h3>
                </div>
            </div>
            <div >
                <img className="image" src = {image} alt="image"/>
            </div>
            <div className="footer">
                <div  className="f1">
                    <h3>Company</h3>
                <div className="f2">
                    <h4>Navigate your next<br/><br/>About Us<br/><br/>Careers<br/><br/>ESG<br/><br/>Investors<br/><br/>Newsroom<br/><br/>Alumni</h4></div>
                </div>
                <div className="f1">
                    <h3 >Subsidiaries</h3>
                    <div className="f2"> 
                        <h4 >EdgeVerve Systems<br/><br/>Infosys BPM<br/><br/>Infosys Consulting<br/><br/>Infosys Public Services</h4>
                    </div>
                </div>
                <div  className="f1">
                    <h3>Programs</h3>
                    <div className="f2">
                        <h4>Infosys Foundation<br/><br/>Infosys Foundation USA<br/><br/>Infosys Science Foundation<br/><br/>Infosys Leadership Institute</h4></div>
                </div>
                <div>
                    <h3>Connect with us</h3>
                    <div className="f2"> 
                        <h4 >Twitter <br/><br/> Facebook<br/><br/> LinkedIn<br/><br/> YouTube</h4>  
                        </div>             
                        </div>
                        <div>
                            <h1>Investors</h1>
                            <h3>Maximizing shareholder value with good corporate governance</h3>
                        </div>
            </div>


        </div>
    )
}

{/* <Route path="/Design" element={<Design/>} /> */}

{/* <NavLink to="/Design">Design</NavLink> */}