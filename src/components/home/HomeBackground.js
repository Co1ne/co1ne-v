import React from 'react';

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'http://co1ne.xyz:5000/videos/722788240.mp4'
        }
    }

    render() {
        return (
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4"/>
                <source src={this.state.videoURL} type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
        )
    }
}