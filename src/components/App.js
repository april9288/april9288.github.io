import React, { Component } from 'react';
import FirstPage from './FirstPage';
import Skillsets from './Skillsets';

import Playground from './Playground';

import Footer from './Footer';
import './App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import PortfolioContainer from './PortfolioContainer';
import { portfoliosFromData } from './data/PortfolioData';
import { experimentalData } from './data/ExperimentalData';

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	appBar: {
		backgroundColor: 'primary'
	},
	toolbarStyle: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: 'white'
	},
	Portfolios: {
		display: 'flex',
		justifyContent: 'center',
		margin: '5rem 0',
		flexWrap: 'wrap'
	}
});

const Portfolios = portfolios => {
	const EachPortfolio = portfolios.map(onePortfolio => {
		return (
			<PortfolioContainer
				key={onePortfolio.id}
				onePortfolio={onePortfolio}
			/>
		);
	});
	return EachPortfolio;
};

class App extends Component {
	state = {
		portfolios: portfoliosFromData,
		experimental: experimentalData
		// filter : 'All',
	};

	// filterClick = (iconClicked) => {
	// 	let filter = iconClicked;
	// 	this.setState({filter});
	// }

	render() {
		const { classes } = this.props;

		const sortedPortfolio = this.state.portfolios.sort(
			(a, b) => b.id - a.id
		);
		const sortedExperimental = this.state.experimental.sort(
			(a, b) => b.id - a.id
		);

		// const filteredPortfolio = sortedPortfolio.filter(portfolio => {
		//     return portfolio.skills.includes(this.state.filter) || portfolio.skills.includes(...this.state.filter);
		//   })

		return (
			<div className='App'>
				<section className={classes.root}>
					<AppBar position='static' className={classes.appBar}>
						<Toolbar className={classes.toolbarStyle}>
							<span
								style={{
									display: 'flex',
									alignItems: 'center'
								}}
							>
								<Typography
									variant='title'
									color='inherit'
									noWrap
								>
									James Kim's Portfolio
								</Typography>
							</span>
							<span>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/april9288/'
									sytle={{ textDecoration: 'none' }}
								>
									<i className='fab fa-github-alt barIcons'></i>
								</a>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://www.linkedin.com/in/james-kim-teamplayer/'
									sytle={{ textDecoration: 'none' }}
								>
									<i className='fab fa-linkedin barIcons'></i>
								</a>
							</span>
						</Toolbar>
					</AppBar>
				</section>

				<FirstPage />

				{/* <section id='portfolioStart'>
					<Skillsets filterClick={this.filterClick} />
				</section> */}

				<section className={classes.Portfolios} id='portfolioStart'>
					{Portfolios(sortedPortfolio)}
				</section>

				{/* <Playground>  
    <section className={classes.Portfolios}>
      {Portfolios(sortedExperimental)}
    </section>
  </Playground> */}

				<Footer />
			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
