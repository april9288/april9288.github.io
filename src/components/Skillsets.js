import React from 'react';
import './Skillsets.css';
import Button from '@material-ui/core/Button';

import NodeIcon from './img/NodeIcon.png';
import ReactIcon from './img/ReactIcon.png';
import PythonIcon from './img/PythonIcon.png';
import MongoIcon from './img/MongoIcon.png';
import FBIcon from './img/FBIcon.png';
import SQLIcon from './img/SQLIcon.png';

const Skillsets = ({filterClick}) => {
    return (
		  <div className = "skillsetIcons">
		        <Button variant="fab" color="primary" className = "skillseticonAll" onClick={()=>filterClick("All")}>
			      All
			    </Button>
		    	<img className = "skillseticon" alt="icon" src = {ReactIcon} onClick={()=>filterClick("React")}/>
		    	<img className = "skillseticon" alt="icon" src = {PythonIcon} onClick={()=>filterClick("Python 3")}/>
		    	<img className = "skillseticon" alt="icon" src = {NodeIcon} onClick={()=>filterClick("Express.js")}/>
		    	<img className = "skillseticon" alt="icon" src = {MongoIcon} onClick={()=>filterClick("Mongoose")}/>
		    	<img className = "skillseticon" alt="icon" src = {FBIcon} onClick={()=>filterClick("Firebase")}/>
		    	<img className = "skillseticon" alt="icon" src = {SQLIcon} onClick={()=>filterClick("Postgresql")}/>
		  </div>
    );
}

export default Skillsets;