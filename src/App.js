import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './Router/routerConfigure';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './MaterialUI/theme';
import AppBar from './component/appBar/appBarUI';
import { Box, Container } from '@material-ui/core';
import HomeUI from './component/Home/homeUI';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box bgcolor="background.default">
          <AppBar />
          <Container maxWidth="lg">
            <HomeUI />
            <Switch>
              {routes.map((v, i) => {
                return (
                  <Route path={v.path} key={i} render={() => v.component} />
                );
              })}
            </Switch>
          </Container>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
