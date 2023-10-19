import React from "react";
import "./Branding.css";
import avatar from './avatar.jpg'
import appleicon from './appleicon.png'
import mac from './mac.png'
import iphone from './iphone.png'
import ipad from './ipad.png'
import airpod from './airpod.png'
import watch from './watch.png'
import appletv from './appletv.png'
import acc from './acc.png'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import { Link } from "react-router-dom";
export const Branding= () =>{
    return(
        <div className="all"> 
                {/* <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iphone</li>
                    <li>Watch</li>
                    <li>Airpods</li>
                    <li>TV & Home</li>
                    <li>Entertainment</li>
                    <li>Accessories</li>
                </ul> */}
                <div className="head">
                    <p className="line1">Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards.</p> 
                    <p className="line2">Plus No Cost EMI from most leading banks.</p>
                    <p ><Link className="line3" to='/seeoffers'>see offers  </Link></p>
                </div>
         <div className="center">
            <div className="left">
                
                <p className="br"><span  style={{color:'black'}} className="bright">Store.</span>Brighten the season with products you love.</p>
            </div>
            <div className="right">
                <div className="help">
                    <img className="icon1" src={avatar} alt='avatar'/>
                    <div className="rtext1">
                        <p className="htext">Need Shopping Help?</p>
                       <p className="link"><Link to='/askhelp'>Ask a specialist</Link> </p>
                    </div>
                </div>
                <div className="visit">
                <img className="icon2" src={appleicon} alt='icon'/>
                
                    <div className="vtext">
                        <p className="ftext">Visit an apple store</p>
                       <p className="link"><Link to='/Find one near you'>Find one near you </Link> </p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="photos">
                <div className="mac">
                    <div > <Link to='/'><img className="img1" src={ mac } alt='mac'/></Link> </div>
                    <div><p className="txt">Mac</p></div>
                </div>
                <div className="phone">
                    <div > <Link to='/'><img className="img1" src={ iphone } alt='iphone'/></Link> </div>
                    <div><p className="txt">iPhone</p></div>
                </div>
                <div className="ipad">
                    <div > <Link to='/'><img className="img1" src={ ipad } alt='iPad'/></Link> </div>
                    <div><p className="txt">iPad</p></div>
                </div>
                <div className="airpod">
                    <div > <Link to='/'><img className="img1"src={ airpod } alt='airpod'/></Link> </div>
                    <div><p className="txt">Airpods</p></div>
                </div>
                <div className="watch">
                    <div > <Link to='/'><img className="img1"src={ watch } alt='watch'/></Link> </div>
                    <div><p className="txt">Watch</p></div>
                </div>
                <div>
                    <div > <Link to='/'><img className="img1"src={ appletv } alt='TV'/></Link> </div>
                    <div><p className="txt">apple TV</p></div>
                </div>
                <div className="acc">
                    <div > <Link to='/'><img className="img1" src={ acc } alt='accessories'/></Link> </div>
                    <div><p className="txt">Accessories</p></div>
                </div>
            </div>
            <br />
            <br /><br />
            <div>
            <p className=" he2"><span  style={{color:'black'}} >Festive specials.</span>All the reasons to rejoice.</p>
            </div>

            <div className ="pics">
            <div className = "head-text">
        <div>
          <img className = "head-image" src = {require ('./pic1.jpg')}  />
        </div>
          <div class='text-on-image'>
             <h3>Save up to ₹10000.00.<br />Instantly on eligible products with HDFC Bank Credit Cards.
                </h3>
          </div>
      </div>
      <div className = "head-text">
        <div >
          <img className = "head-image" src = {require ('./pic2.jpg')}  />
        </div>
          <div class='text-on-image'>
             <h3>Save up to ₹6000.00.<br />Trade in your smartphone to save more.</h3>
          </div>
      </div>
      <div className = "head-text">
        <div>
          <img className = "head-image" src = {require ('./pic3.jpg')}  />
        </div>
          <div class='text-on-image'>
             <h3>Save up to ₹10000.00.<br />Customise it the way you want.</h3>
          </div>
      </div>
      </div>
    
         </div>
          
    )
}
{/* <NavLink to="/Branding">Branding</NavLink> */}
{/* <Route path="/Branding" element={<Branding />} /> */}
// import { Branding } from './Bala/Branding';