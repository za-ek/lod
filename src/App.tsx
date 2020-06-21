import React from 'react';
import {Switch, Route, HashRouter, Link, Redirect} from 'react-router-dom';
import './App.css';
import {EducationalPrograms} from "./Pages/EducationalPrograms";
import {Col, Container, Row} from "react-bootstrap";
import {EducationalProgram} from "./Pages/EducationalProgram";
import Page1 from "./Pages/1";
import Page2 from "./Pages/2";
import Page4 from "./Pages/4";
// import Page3 from "./Pages/3";

function App() {
  return (
        <HashRouter>
            <Switch>
                <Route path={"/programs/1"}>
                    <Page4 />
                </Route>
                <Route path={"/programs/old"}>
                    <Page2 />
                </Route>
                <Route path={"/programs/new"}>
                    <Page1 />
                </Route>
                <Route path={"/"}><Redirect to={"/programs/new"} /></Route>
            </Switch>
        </HashRouter>
  );
}

export default App;
