import React, {Component} from 'react';
import './App.css';
import TopBar from "../components/TopBar";
import HomeBackground from "../components/home/HomeBackground";
import HomePage from "../components/home/HomePage";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
    render() {

        const Home = () => (
            <div>
                <HomePage/>
            </div>
        );
        const Videos = () => (
            <div>
                <h2>Videos</h2>
            </div>
        );
        const About = () => (
            <div>
                <h2>About</h2>
            </div>
        );

        return (
            <Router>
                <div>
                    <HomeBackground/>
                    <div className="content">
                        <TopBar/>
                        <div id="main_container">
                            <Route exact path="/" component={Home}/>
                            <Route path="/videos" component={Videos}/>
                            <Route path="/about" component={About}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
