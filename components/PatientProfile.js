import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { connect } from 'react-redux';
import { withRouter } from 'next/router'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Router from 'next/router';



// Actions
import { 
    newPatinetAction,
  } from '../store'
    

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  card: {
    maxWidth: 400,
  },
});


class PatientProfile extends React.PureComponent {
    state = {
        newPatient: {
            vitals: []
        }
    }

    componentWillMount() {
        if(this.props.router.query.id) {
            if(this.props.router.query.id !== this.props.newPatient._id ) {
                axios.get(`https://smartapinode.herokuapp.com/patients/${this.props.router.query.id}`).then((res) => {
                    const {dispatch} = this.props
                    dispatch(newPatinetAction(res.data.patient))
                    console.log('Here', res );
                    this.setState({ newPatient: this.props.newPatient })
                })
            }
        }
    }

    render() {
        const { classes } = this.props;
        if( Object.keys(this.props.newPatient).length !== 0 ) {
            console.log(this.props.newPatient);
            return (
                <div className={classes.root}>
                  <Grid container spacing={24}>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                          <CardHeader
                              avatar={
                                  <Avatar
                                      alt="Adelle Charles"
                                      src="https://images.unsplash.com/photo-1504294309125-4439ff693e3b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b734080658a12077ba5f4fb2c300dc2f&auto=format&fit=crop&w=1355&q=80"
                                      className={classNames(classes.avatar, classes.bigAvatar)}
                                  />
                              }
                              title="Summary"
                              subheader="September 14, 2018"
                          />
                            <CardActions>
                                <Button 
                                    size="small" 
                                    color="primary"
                                    onClick={
                                        () => {
                                            Router.push(`/dash?id=${this.state.newPatient._id}`)
                                        }
                                    }
                                >
                                    Edit Info
                                </Button>
                                <Button size="small" color="primary">
                                    More
                                </Button>
                            </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                  <Grid container spacing={24}>
                      <Grid item xs={6}>
                          <Paper className={classes.paper}>
                              <Typography variant="h6" color="inherit" noWrap>
                                  Summary
                              </Typography>
                              <div>
                                  <b>First Name : </b><span>{this.state.newPatient.firstname}</span>
                              </div>
                              <div>
                                  <b>Last Name : </b><span>{this.state.newPatient.lastname}</span>
                              </div>
                              <div>
                                  <b>Age : </b><span>{this.state.newPatient.age}</span>
                              </div>
                              <div>
                                  <b>Allergies : </b><span>{this.state.newPatient.allergies}</span>
                              </div>
                              <div>
                                  <b>Physician : </b><span>{this.state.newPatient.physician}</span>
                              </div>
                              <div>
                                  <b>Diagonosis (Primay) : </b><span>{this.state.newPatient.primary_diagonosis}</span>
                              </div>
                          </Paper>
                      </Grid>
      
                      <Grid item xs={6}>
                          <Paper className={classes.paper}>
                              <Typography variant="h6" color="inherit" noWrap>
                                  Vitals
                              </Typography>
                              {
                                  this.state.newPatient.vitals.map((item) => {
                                      return(
                                        <div>
                                            <b>{item.label} : </b><span>  {item.val}  </span>
                                        </div>
                                      )
                                  })
                              }
                          </Paper>
                      </Grid>
                  
                  
                  </Grid>
                </div>
              );
        }
        return (
            <div>Loading State ...</div>
        )
    }
}

PatientProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps (state) {
    const  { newPatient } = state
    return { newPatient }
}

export default withRouter (connect(mapStateToProps)(withStyles(styles)(PatientProfile)));