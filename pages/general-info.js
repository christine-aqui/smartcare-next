import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';



class GeneralInfo extends React.Component {

    state = {
        value: 'female',
    };
    
    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render()
    {
        const { classes } = this.props;
        return(
        <div>
            <div className={classes.row}>
                <TextField
                    label="First Name"
                    margin="normal"
                    className={classes.textField}
                />

                <TextField
                    label="Last Name"
                    margin="normal"
                    className={classes.textField}
                />
                <TextField
                    label="Age"
                    margin="normal"
                    type="number"
                    className={classes.textField}
                />
            </div>
            <div className={`${classes.row} ${classes.gender}`}>
                <div>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                </div>
            </div>
            <div className={classes.row}>
                <TextField
                    label="Allergies"
                    margin="normal"
                    multiline
                    className={classes.textField}
                />
            </div>
        </div>
        )
    }   


}
const styles = theme => ({
    textField: {
        marginRight: '10px'
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    gender: {
        paddingTop: '20px'
    }
});
  
export default withStyles(styles)(GeneralInfo);