import React from 'react';
import {Player, ControlBar} from 'video-react';
import "video-react/dist/video-react.css";
import './VideoPlayer.css'
export default class VideoPlayer extends React.Component {

    render() {
        return (
            <div className="video-player">
                <Player ref="player" poster="http://p0txowvdr.bkt.clouddn.com/2015120209563814.jpg">
                    <source src="http://media.w3.org/2010/05/bunny/movie.mp4"/>
                    <ControlBar autoHide={true}/>
                </Player>
            </div>
        )
    }
}