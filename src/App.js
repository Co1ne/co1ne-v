import React, {Component} from 'react';
import './App.css';
import TopBar from "./components/TopBar";
import VideoList from "./components/VideoList";
import MainCenterText from "./components/MainCenterText";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'http://co1ne.xyz:5000/videos/722788240.mp4'
        }
    }

    render() {
        return (
            <div>
                <video id="background-video" loop autoPlay>
                    <source src={this.state.videoURL} type="video/mp4"/>
                    <source src={this.state.videoURL} type="video/ogg"/>
                    Your browser does not support the video tag.
                </video>
                <div className="content">
                    <TopBar/>
                    <div id="main_container">
                        <h1 style={{fontSize: 48}}>欢迎来到</h1>
                        <MainCenterText/>
                        <p>随便挑个视频看看？</p>
                        <VideoList/>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
