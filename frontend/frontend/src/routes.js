import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";


export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>                                         // O Switch garante que apenas uma rota seja
        <Route path="/" exact component={Logon}/>     // executada por momento
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/incidents/new" component={NewIncident}/>
      </Switch>

    </BrowserRouter>




    );

}