import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {NavLink} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
        margin: 32,
    },
    flex: {
        flex: 1,
    },
};

function SimpleAppBar(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Co1ne
                    </Typography>
                    <div>
                        <Button><NavLink to="/" className="nav_button_class"> 主页</NavLink></Button>
                        <Button color="inherit"><NavLink to="/videos" className="nav_button_class">视频</NavLink></Button>
                        <Button color="inherit"><NavLink to="/about" className="nav_button_class">关于我</NavLink></Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);