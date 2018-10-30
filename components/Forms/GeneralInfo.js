import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

// store
import { 
    changeName, 
    changeLastName, 
    changeAge, 
    changeGender,
    changePrimaryDiagonosis,
    changePhysician,
    changeAllergies,
    changeEmergencyContact,
    updateDenture,
    updateConcent
} from '../../store'



class GeneralInfo extends React.Component {

    state = {
        value: 'female'
    };
    
    handleChangeGender = event => {
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

    handleEmergencyContact = event => {
        const {dispatch} = this.props
        dispatch(changeEmergencyContact(event.target.value))
    }

    handleChange = name => event => {
        const {dispatch} = this.props
        switch(name) {
            case 'denteture':
                dispatch(updateDenture(!this.props.denteture))
                break;
            case 'concent':
                dispatch(updateConcent(!this.props.concent))
                break;
            default:
                console.log('Error');
        }
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
                <TextField
                    label="Emergency Contact"
                    margin="normal"
                    className={classes.textField}
                    onChange={this.handleEmergencyContact}
                    value={this.props.emergencyContact}
                />
            </div>
            <div className={classes.row}>
                <TextField
                    label="Arrival Time"
                    margin="normal"
                    className={classes.textField}
                    onChange={this.handleEmergencyContact}
                    value={this.props.emergencyContact}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.props.denteture}
                            onChange={this.handleChange('denteture')}
                            value={this.props.deteture}
                        />
                    }
                    className={classes.checkboxes}
                    label="Deteture/Glass/Mouthware Removed"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.props.concent}
                            onChange={this.handleChange('concent')}
                            value={this.props.concent}
                        />
                    }
                    className={classes.checkboxes}
                    label="Consent on Chart"
                />
                <TextField
                    label="NPO Since"
                    margin="normal"
                    className={classes.textField}
                    onChange={this.handleEmergencyContact}
                    value={this.props.emergencyContact}
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
                    onChange={this.handleChangeGender}
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
    const  {
        firstName, 
        lastName, 
        age, 
        gender, 
        allergies, 
        physician, 
        primaryDiagonosis,
        emergencyContact,
        denteture,
        concent
    } = state
    return {
        firstName, 
        lastName, 
        age, 
        gender, 
        allergies, 
        physician, 
        primaryDiagonosis,
        emergencyContact,
        denteture,
        concent
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
    },
    checkboxes: {
        paddingTop: '25px'
    },
    group: {
        flexDirection: 'row'
    }
});

export default connect(mapStateToProps)(withStyles(styles)(GeneralInfo));