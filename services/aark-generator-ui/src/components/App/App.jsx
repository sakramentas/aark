import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { CodeEditor } from '../CodeEditor/CodeEditor';

import './App.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b2725',
    },
    secondary: {
      main: '#ff4400',
      contrastText: '#ffcc00',
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Aark Generator</Typography>
          </Toolbar>
        </AppBar>
        <div className="Body grid-y grid-padding-y">
          <div className="Hero cell margin-2">
            <Typography variant="h3">The 2020 JavaScript Generator</Typography>
          </div>
          <CodeEditor />
        </div>
      </div>
    </ThemeProvider>
  );
};
