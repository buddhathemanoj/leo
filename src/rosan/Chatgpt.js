import React from "react";
import './Chatgpt.css'
import { Link } from "react-router-dom";
export const Tablet =()=>{
    return(
        <div className="mainn">
            <div>
            <div>
                <div className='firs'>
                        <h2 className='h'>OpenAi</h2>
                        <Link to='reasearch' style={{textDecoration:'none'}}><p className="f">Reasearch</p></Link>
                        <Link to='API' style={{textDecoration:'none'}}><p className="f">API</p></Link>
                        <Link to='chatgpt' style={{textDecoration:'none'}}><p className="f">ChatGPT</p></Link>
                        <Link to='safety' style={{textDecoration:'none'}}><p className="f">Safety</p></Link>
                        <Link to='company' style={{textDecoration:'none'}}><p className="f">Company</p></Link>
                        <div className='firs1'>
                        <Link to='company' style={{textDecoration:'none'}}><p className="f">Search</p></Link>
                        <Link to='company' style={{textDecoration:'none'}}><p className="f">Log in&#8599;</p></Link>
                        <Link to='Try ChatGPT ' style={{textDecoration:'none'}}><p className="last">Try ChatGPT&#8599;</p></Link>
                        </div>
                </div> 
                <div className='hol'>
                <div className="first" >
                <h1 className="head">Introducing<br></br> ChatGPT</h1>
            </div>
            <div >
                <p className="par">We’ve trained a model called ChatGPT which<br></br> interacts in a conversational way. The dialogue <br></br>format makes it possible for ChatGPT to answer<br></br> followup questions, admit its mistakes, challenge <br></br>incorrect premises, and reject inappropriate<br></br> requests.</p>
            </div>
            </div>
            <div className="size">
            <div >
            <Link to='Try ChatGPT ' style={{textDecoration:'none'}}><p className="last">Try ChatGPT&#8599;</p></Link>
            </div>
            <div>
            <Link to='read'style={{textDecoration:'none'}}><p className="read">Read about ChatGPT Plus</p></Link>
            <p>Illustration: Ruby Chen</p>
            </div>
            </div>
            </div>
                </div>
                <div >
            <img className="image"src="https://images.openai.com/blob/8d14e8f0-e267-4b8b-a9f2-a79120808f5a/chatgpt.jpg?trim=0,0,0,0&width=1400" alt="pic"></img>
            </div>
        </div>
    )
}
/* <NavLink to="/chatgpt">Chatgpt</NavLink> */
/* <Route path='/chatgpt'element={<Tablet />}></Route> */



