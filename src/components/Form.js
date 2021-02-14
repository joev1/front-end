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
        const data = new FormData(event.target)
        fetch(process.env.REACT_APP_API_URL + '/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        }).then(() =>
        {
            console.log("sent!");
        }).catch(() =>
        {
            console.log("fail!");
        })
    }

    render() {
        return (
            <div className="App">
                <h2>Registration</h2>
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="formInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Name"/>
                <input className="formInput" type="text" placeholder="Password"/>
                <input className="myButton" type="submit" value="Submit"/>
            </form>
            <Link className='myButton' to='/'>
                <span>Back to home</span>
            </Link>
            </div>
        );
    }
}

export default Form;