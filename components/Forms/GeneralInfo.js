import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

// store
import { 
    changeName, 
    changeLastName, 
    changeAge, 
    changeGender,
    changePrimaryDiagonosis,
    changePhysician,
    changeAllergies
} from '../../store'



class GeneralInfo extends React.Component {

    state = {
        value: 'female'
    };
    
    handleChange = event => {
        const {dispatch} = this.props
        dispatch(changeGender(event.target.value))
    };

    firstNameHadle =  event => {
        const {dispatch} = this.props
        dispatch(changeName(event.target.value))
    }

    lastNameHadle =  event => {
        const {dispatch} = this.props
        dispatch(changeLastName(event.target.value))
    }

    ageHadle =  event => {
        const {dispatch} = this.props
        dispatch(changeAge(event.target.value))
    }

    handleAllergies =  event => {
        const {dispatch} = this.props
        dispatch(changeAllergies(event.target.value))
    }

    handlePhysician =  event => {
        const {dispatch} = this.props
        dispatch(changePhysician(event.target.value))
    }

    handleprimaryDiagonosis =  event => {
        const {dispatch} = this.props
        dispatch(changePrimaryDiagonosis(event.target.value))
    }

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
                    onChange={this.firstNameHadle}
                    value={this.props.firstName}
                />

                <TextField
                    label="Last Name"
                    margin="normal"
                    className={classes.textField}
                    onChange={this.lastNameHadle}
                    value={this.props.lastName}
                />
                <TextField
                    label="Age"
                    margin="normal"
                    type="number"
                    onChange={this.ageHadle}
                    value={this.props.age}
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
                    value={this.props.gender}
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
                    value={this.props.allergies}
                    onChange={this.handleAllergies}
                />
                <TextField
                    label="Physician"
                    margin="normal"
                    multiline
                    className={classes.textField}
                    value={this.props.physician}
                    onChange={this.handlePhysician}
                />
                <TextField
                    label="Primary Diagonosis"
                    margin="normal"
                    multiline
                    className={classes.textField}
                    value={this.props.primaryDiagonosis}
                    onChange={this.handleprimaryDiagonosis}
                />
            </div>
        </div>
        )
    }   


}


function mapStateToProps (state) {
    const  {firstName, lastName, age, gender, allergies, physician, primaryDiagonosis } = state
    return {firstName, lastName, age, gender,  allergies, physician, primaryDiagonosis}
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

export default connect(mapStateToProps)(withStyles(styles)(GeneralInfo));