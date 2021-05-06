import './css/App.css';
import './css/Button.css';
import './css/Form.css';
import RegistrationForm from "./components/RegistrationForm";
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
                    <Route history={history} exact path='/form' component={RegistrationForm} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
