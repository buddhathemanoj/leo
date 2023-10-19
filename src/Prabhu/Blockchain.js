import react from "react";
import '../Prabhu/Blockchain.css'
import crm from './crm.png'
import book from './book.png'
import mail from './mail.png'
import people from './people.png'
import creator from './creator.png'
import img from './img.png'
import { Menu } from "./Menu";

export const Blockchain =()=> {
    return(
        <>
           <Menu />
        
          <div className="wd">
         
            <div className="td" >
                <h1>Your life's work<br></br> powered by our life's work</h1>
                <p className="para">A unique and powerful software suite<br></br> to transform the way you work.<br></br> Designed for businesses of all sizes, <br></br>built by a company that values your privacy.</p>
                <button type="Submit" className="GB" >Get more for details-->></button>
                <div>
                <img className="img" src={img} alt="img"/></div>
            </div>
            <div className="dd">
            <h6>Featured Apps</h6><br></br>
                <div className="d1d">
                <div>
                <img className="cr" src={crm} alt="crm"/>
                </div>
                <div>
                
                <h5>CRM</h5>
                <p className="p"> Convert deals and close sales <br></br> deals faster
                </p></div></div>
                <div className="d1d">
                    <div>
                    <img className="cr" src={book} alt="book"/>
                    </div>
                <div>
                <h5>BOOKS</h5>
                <p className="p">Powerfull financial platform for <br></br> growing business</p></div>
                </div>
                <div className="d1d">
                <div>
                <img className="cr" src={mail} alt="mail"/>
                </div>
                <div>
                <h5>MAIL</h5>
                <p className="p"> Secure email service<br></br>;for your business
                </p></div>  </div>
                <div className="d1d">
                    <div>
                    <img className="cr" src={people} alt="people"/>
                    </div>
                    <div>
                <h5>PEOPLE</h5>
                <p className="p">Organize,automate and <br></br>Simplify your HR process</p></div></div>
                <div className="d1d">
                    <div><img className="cr" src={creator} alt="creator"/></div>
                    <div>
                <h5>CREATOR</h5>
                <p className="p">Build custom apps for your<br></br>business needs</p></div></div>
                <hr></hr>
              
                <p className="lt">Explore all products-->></p>
            </div>
            
        </div>
        </>
        
      
    )
}


