import React, { Component } from 'react';
import FirstPage from './FirstPage';
import Skillsets from './Skillsets';
import Footer from './Footer';
import './App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import PortfolioContainer from './PortfolioContainer';
import { portfoliosFromData } from './PortfolioData';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar : {
	backgroundColor: "primary",
  },
  toolbarStyle : {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color:"white"
  },
  Portfolios : {
    display: "flex",
    justifyContent: "center",
    margin: "5rem 0",
    flexWrap : "wrap"
  },
});

const Portfolios = (portfolios) => {
  const EachPortfolio = portfolios.map(onePortfolio => {
    return <PortfolioContainer key={onePortfolio.id} onePortfolio={onePortfolio} />
  })
  return EachPortfolio;
}

class App extends Component {
constructor() {
	super();
	this.state = {
    portfolios : portfoliosFromData,
		filter : 'All',
	}
	
} 

// componentDidMount() {
// 	fetch("https://soriapi.herokuapp.com/")
// 	.then(()=>console.log("Wake up sori api!"))
// 	.catch(e=>console.log(e))
// 	fetch("https://fruitzapi.herokuapp.com/")
// 	.then(()=>console.log("Wake up fruitz api!"))
// 	.catch(e=>console.log(e))
// }

filterClick = (iconClicked) => {
	let filter = iconClicked;
	this.setState({filter});
}

render() {
	const { classes } = this.props;

  const filteredPortfolio = this.state.portfolios.filter(portfolio => {
      return portfolio.skills.includes(this.state.filter) || portfolio.skills.includes(...this.state.filter);
    })

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

	<FirstPage />

	<section id="portfolioStart">
		<Skillsets filterClick={this.filterClick}/>
	</section>

	<section className={classes.Portfolios}>
		{Portfolios(filteredPortfolio)}
	</section>

  <Footer />

	</div>
	);
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);