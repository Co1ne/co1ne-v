import React from 'react';
import VideoList from "../VideoList";
import HomeCenterText from "./HomeCenterText";

export default class HomePage extends React.Component {

    render() {
        return (
            <div>
                <h1 style={{fontSize: 48}}>Shameless</h1>
                <HomeCenterText/>
                <p>推荐视频 ↓ ↓ ↓</p>
                <VideoList/>
            </div>

        )
    }
}