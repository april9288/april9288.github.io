import React, { Component } from 'react';
import Mypic from './img/mypic2.jpg';
import './FirstPage.css';

class FirstPage extends Component {
  render() {
    return (
    	<section className="firstPageComp">
    	<div className="firstPageSubComp">
    		<img src={Mypic} alt="mypic" className="firstPagePicture" width={200} height={200}/>
    		<div className="firstPageTyping">
    			<span>Hello! I'm James Kim,</span>
    			<span>Web Developer</span>
    		</div>
    	</div>

	    <div className="arrowDownDiv">
	  	  <a rel="noopener noreferrer" href="#portfolioStart" sytle={{textDecoration: "none"}}><i className="fas fa-angle-down arrowDown"></i></a>
	    </div>

    	</section>
    );
  }
}

export default FirstPage;
