import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./Router/routerConfigure";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./MaterialUI/theme";
import { Box } from "@material-ui/core";
import FormatProvider from "./i18n/formatProvider";
import MediaQueryWrap from "./component/mediaQueryWrap";
import LoginAndRegister from "./component/loginAndRegister/loginAndRegister";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import configureAppStore from "./Redux/Store";

const Store = configureAppStore();
let persistor = persistStore(Store);
function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ThemeProvider theme={theme}>
            <FormatProvider>
              <Box bgcolor="background.default">
                <MediaQueryWrap />
                <LoginAndRegister />
                <Switch>
                  {routes.map((v, i) => {
                    return (
                      <Route
                        path={v.path}
                        key={i}
                        render={() => v.component}
                        exact
                      />
                    );
                  })}
                </Switch>
              </Box>
            </FormatProvider>
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
