import './App.css';
import Form from "./components/Form";
import Home from "./components/Home";
import React, {Component} from "react";
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";

class App extends Component {
    render() {
        const { history } = this.props
        return (
            <div className="App">
                <Switch>
                    <Route history={history} exact path='/' component={Home} />
                    <Route history={history} exact path='/form' component={Form} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
