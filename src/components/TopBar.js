import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

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
                    <Button color="inherit">主页</Button>
                    <Button color="inherit">视频</Button>
                    <Button color="inherit">关于我</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);