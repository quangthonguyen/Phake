import React, { lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Suspense } from "react";
import { CircularProgress } from "@material-ui/core";
const App = lazy(() => import("./App"));
// const Store = configureAppStore();
// let persistor = persistStore(Store);

ReactDOM.render(
  <Suspense
    fallback={
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <CircularProgress />
        <div>Loading...</div>
      </div>
    }
  >
    {/* <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate>
    </Provider> */}
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
