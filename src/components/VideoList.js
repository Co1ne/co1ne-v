import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import VideoPlayer from "./VideoPlayer";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        padding: 16,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class GuttersGrid extends React.Component {
    state = {
        spacing: '16',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const {classes} = this.props;
        const {spacing} = this.state;

        return (
            <Grid item xs={12}>
                <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                    {[0, 1, 2, 3].map(value => (
                        <Grid key={value} item>
                            <VideoPlayer/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);