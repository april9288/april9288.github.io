import React, { Component } from 'react';
import './FirstPage.css';

import Typing from 'react-typing-animation';
import JSIcon from './img/JSIcon.png';
import NodeIcon from './img/NodeIcon.png';
import ReactIcon from './img/ReactIcon.png';
import PythonIcon from './img/PythonIcon.png';
import MongoIcon from './img/MongoIcon.png';
import FBIcon from './img/FBIcon.png';
import SQLIcon from './img/SQLIcon.png';

const componentStyle = {
	display: "grid",
	justifyContent: "center",
	padding: "0 24px"
}

class FirstPage extends Component {
  render() {
    return (
    	<section style={componentStyle}>

		<div className = "typingSection">
		  <Typing>
		    <span className="oneTyping">Hello</span><br />
		    <Typing.Delay ms={1000} />
		    <span className="oneTyping"> I'm James Kim</span><br />
		    <Typing.Delay ms={1000} />
		    <span className="oneTyping"> I'm a <span style={{color:"#69e781"}}>Web Developer</span></span>
		    <Typing.Delay ms={1000} />
		    <Typing.Backspace count={20} />
		    <span className="oneTyping"> Coding is fun</span>
		    <Typing.Delay ms={1000} />
		    <Typing.Backspace count={4} />
		    <span className="oneTyping"> love</span>
		    <Typing.Delay ms={1000} />
		    <Typing.Backspace count={5} />
		    <span className="oneTyping"> my life</span>
		    <Typing.Delay ms={10000000} />
		  </Typing>
		</div>

		  <div className = "skillsetIcons">
		      	<img className = "skillseticon" alt="icon" src = {JSIcon} />
		    	<img className = "skillseticon" alt="icon" src = {NodeIcon} />
		    	<img className = "skillseticon" alt="icon" src = {ReactIcon} />
		    	<img className = "skillseticon" alt="icon" src = {PythonIcon} />
		    	<img className = "skillseticon" alt="icon" src = {MongoIcon} />
		    	<img className = "skillseticon" alt="icon" src = {FBIcon} />
		    	<img className = "skillseticon" alt="icon" src = {SQLIcon} />
		  </div>

		  <div className="arrowDownDiv">
		  	<i className="fas fa-angle-down arrowDown"></i>
		  </div>

    	</section>
    );
  }
}

export default FirstPage;
