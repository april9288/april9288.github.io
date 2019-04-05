import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
   palette: {
    primary: {
      main: '#12375c',
    },
    secondary: {
      main: '#f52549',
    },
    error: {
      main: "#f52549",
    }
  }
});

ReactDOM.render(        
	<MuiThemeProvider theme={theme}>
    	<App />
  </MuiThemeProvider>, document.getElementById('root'));
