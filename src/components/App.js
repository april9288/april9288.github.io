import React, { Component } from 'react';
import FirstPage from './FirstPage';
import PF1 from './subcomp/PF1';
import './App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar : {
	backgroundColor: "transparent",
  },
  toolbarStyle : {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color:"white"
  },
  FirstPage : {
  	height: "90vh"
  },
  Portfolios : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10rem 0"
  }
});

class App extends Component {

render() {
	const { classes, theme } = this.props;
	return (
	<div className="App">
	<section className={classes.root}>
	  <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbarStyle}>
              <span style={{display:"flex", alignItems:"center"}}>
              <Typography variant="title" color="inherit" noWrap>
                James Kim's Portfolio
              </Typography>
              </span>
              <span>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/april9288/" sytle={{textDecoration: "none"}}><i className="fab fa-github-alt barIcons"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jongho-kim-b05618170/" sytle={{textDecoration: "none"}}><i className="fab fa-linkedin barIcons"></i></a>
              </span>

            </Toolbar>
	  </AppBar>
	</section>

	<section className={classes.FirstPage}>
		<FirstPage />
	</section>

	<section className={classes.Portfolios}>
		<PF1 />
	</section>

	</div>
	);
	}
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);