import React from 'react';
import { Link } from "react-router-dom"

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Hello World!</h1>
                <Link className='myButton' to='/form'>
                    <span>Registration</span>
                </Link>
            </div>
        );
    }
}

export default Home;