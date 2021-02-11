import React from 'react';
import { Link } from "react-router-dom"

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        alert('Registration for user ' + this.state.value + ' completed.' );
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Registration</h2>
            <form onSubmit={this.handleSubmit}>
                <label><span style={{marginRight: 0.5 + 'em'}}>Name:</span>
                <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="myButton" type="submit" value="Submit" />
            </form>
            <Link className='myButton' to='/'>
                <span>Back to home</span>
            </Link>
            </div>
        );
    }
}

export default Form;