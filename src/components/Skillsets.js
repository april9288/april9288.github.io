import React from 'react';
import './Skillsets.css';
// import Button from '@material-ui/core/Button';

import ReactIcon from './img/ReactIcon.png';
import ReduxIcon from './img/Redux.png';
import MongoIcon from './img/MongoIcon.png';
import FBIcon from './img/FBIcon.png';
import SQLIcon from './img/SQLIcon.png';
import PythonIcon from './img/PythonIcon.png';

const Skillsets = ({filterClick}) => {
    return (
		  <div className = "skillsetIcons">
		    	<img className = "skillseticon" alt="icon" src = {ReactIcon} onClick={()=>filterClick("React")}/>
		    	<img className = "skillseticon" alt="icon" src = {ReduxIcon} onClick={()=>filterClick("Redux")}/>
		    	<img className = "skillseticon" alt="icon" src = {MongoIcon} onClick={()=>filterClick("Mongoose")}/>
		    	<img className = "skillseticon" alt="icon" src = {FBIcon} onClick={()=>filterClick("Firebase")}/>
		    	<img className = "skillseticon" alt="icon" src = {SQLIcon} onClick={()=>filterClick("Postgresql")}/>
		    	<img className = "skillseticon" alt="icon" src = {PythonIcon} onClick={()=>filterClick("Python 3")}/>
		  </div>
    );
}

export default Skillsets;


// <Button variant="fab" color="primary" className = "skillseticonAll" onClick={()=>filterClick("All")}>
//   All
// </Button>