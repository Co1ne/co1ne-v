import React, {Component} from 'react';
import App from "../App";

class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">
                <div className="Welcome-header">
                    <h2>Welcome to Co1ne</h2>
                </div>
                <p className="Welcome-intro">
                   It were being developing!
                </p>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Welcome;