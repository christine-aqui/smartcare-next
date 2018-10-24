import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class VitalSigns extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <div>
                <div className={classes.row}>
                <TextField
                    id="blood-preasure"
                    label="Blood Preasure"
                    margin="normal"
                    multiline
                    className={classes.textField}
                    fullWidth
                    type="number"
                />
                <TextField
                    label="Heart Rate"
                    margin="normal"
                    multiline
                    className={classes.textField}
                    fullWidth
                    type="number"
                />
                <TextField
                    label="Respirations"
                    margin="normal"
                    multiline
                    className={classes.textField}
                    fullWidth
                    type="number"
                />
                </div>
                <div className={classes.row}>
                <TextField
                    label="Oxygen"
                    margin="normal"
                    multiline
                    className={classes.textField}
                    fullWidth
                />
                <TextField
                    label="Temperature"
                    margin="normal"
                    multiline
                    className={classes.textField}
                    fullWidth
                />
                </div>
            </div>
        )
    }
}

VitalSigns.propTypes = {
    classes: PropTypes.object,
};

const styles = theme => ({
    row: {
        display: 'flex',
        width: '60vw'
    },
    textField: {
        marginRight: '10px'
    },
});

export default withStyles(styles)(VitalSigns);