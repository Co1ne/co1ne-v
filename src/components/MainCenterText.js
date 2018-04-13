import React from 'react';
import Button from "material-ui//Button";
import {CHANGE_FIRST_LINE} from './actions/MainActions'

export default class MainCenterText extends React.Component {
    firstLine;
    secondLine;
    buttonText;

    constructor(props) {
        super(props);
        this.state = {firstLine: '英雄..呃...那个啥...', secondLine: '你好，世界', buttonText: '哎...认真点！'};
        this.changeMainText = this.changeMainText.bind(this)
    }

    changeFirstLine(state, action) {
        if (action == CHANGE_FIRST_LINE) {

        }
    }

    changeMainText() {
        this.setState({firstLine: '柯东的视频网站', secondLine: '偷偷告诉你，下面的视频都是一样的', buttonText: '已经很认真了'})
    };

    render() {
        return (
            <div>
                <h3>{this.state.firstLine}</h3>
                <h3>{this.state.secondLine}</h3>
                <Button id="main-center-button" variant="raised" color="secondary"
                        onClick={this.changeMainText}>
                    {this.state.buttonText}
                </Button>
            </div>
        )
    }
}