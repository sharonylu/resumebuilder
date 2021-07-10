import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddResume from "./Components/AddResume";
import Table from "./Components/Table";
import Pdf from "./Components/CreatePdf";
import NotFound from './Components/NotFound';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={AddResume} />
                    <Route exact path="/view" component={Table} />
                    <Route exact path="/pdf/:id" component={Pdf} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
