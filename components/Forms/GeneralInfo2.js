import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


// store
import { 
    updateBasicForm
} from '../../store'



class GeneralInfo2 extends React.Component {

    state = {
        value: 'female'
    };

    handleChange = (event) => {
        const {dispatch} = this.props
        dispatch(updateBasicForm(event.target.value))
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
                    onChange={this.handleChange}
                    value={this.props.generalInfo.firstName}
                />

                <TextField
                    label="Last Name"
                    margin="normal"
                    className={classes.textField}
                    onChange={this.lastNameHadle}
                    value={this.props.generalInfo.lastName}
                />
                <TextField
                    label="Age"
                    margin="normal"
                    type="number"
                    onChange={this.ageHadle}
                    value={this.props.generalInfo.age}
                    className={classes.textField}
                />
            </div>
        </div>
        )
    }   


}


function mapStateToProps (state) {
    const  { generalInfo } = state
    return { generalInfo }
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

export default connect(mapStateToProps)(withStyles(styles)(GeneralInfo2));