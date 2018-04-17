import React from 'react';
import Button from "material-ui//Button";
import {Link} from "react-router-dom";

export default class MainCenterText extends React.Component {
    firstLine;
    secondLine;
    buttonText;

    constructor(props) {
        super(props);
        this.state = {firstLine: '敬请欣赏', secondLine: '无耻之徒 - 第七季', buttonText: '开始观看'};
        this.changeMainText = this.changeMainText.bind(this)
    }

    changeMainText() {
        this.setState({firstLine: '柯东的视频网站', secondLine: '偷偷告诉你，下面的视频都是一样的', buttonText: '已经很认真了'})
    };

    render() {
        return (
            <div>
                <h3>{this.state.firstLine}</h3>
                <h3>{this.state.secondLine}</h3>
                <Button id="main-center-button" variant="raised" color="secondary">
                    <Link to="/videos" className="nav_button_white">{this.state.buttonText}</Link>
                </Button>
            </div>
        )
    }
}