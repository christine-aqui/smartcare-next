import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Router from 'next/router';

// Components
import GeneralInfo from './Forms/GeneralInfo';
import VitalSigns2 from './Forms/Vitals2';

// Actions
import { 
  newPatinetAction,
} from '../store'


const styles = theme => ({
  root: {
    width: '100%',
    overflowY: 'scroll',
    height: '85vh'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Patient Info', 'Vitals', 'Other Info'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <GeneralInfo />
      )
    case 1:
      return(
        <VitalSigns2 />
      )
    case 2:
      return(
        <TextField
          id="additional-notes"
          label="Additional Notes"
          margin="normal"
          multiline
          fullWidth
        />
      )
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleSubmit = () => {
    axios.post('https://smartapinode.herokuapp.com/patients', {
      "firstname": this.props.firstName,
      "lastname": this.props.lastName,
      "age": this.props.age,
      "gender": this.props.gender,
      "allergies": this.props.allergies,
      "primary_diagonosis": this.props.primaryDiagonosis,
      "physician": this.props.physician,
      "vitals": this.props.fields
    }).then((res) => {
      const {dispatch} = this.props
      dispatch(newPatinetAction(res.data.newPatient))

      Router.push(`/about?${res.data.newPatient._id}`)
    })
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - Please Submit to create record</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
            <Button onClick={this.handleSubmit} 
                    variant="contained" 
                    color="secondary"
                    className={classes.button}
            >
              Submit
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

function mapStateToProps (state) {
  const {firstName, lastName, age, gender, allergies, physician, primaryDiagonosis, fields } = state
  return {firstName, lastName, age, gender,  allergies, physician, primaryDiagonosis, fields}
}

export default connect(mapStateToProps)(withStyles(styles)(VerticalLinearStepper));