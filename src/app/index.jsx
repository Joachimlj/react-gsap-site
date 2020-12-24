import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/";
import Layout from "./layout/";

export default function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Layout>
    </>
  );
}
