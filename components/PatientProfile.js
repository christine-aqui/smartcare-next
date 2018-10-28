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


class PatientProfile extends React.Component {

    render() {
        const { classes } = this.props;

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
                        subheader="September 14, 2016"
                    />
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
                            <b>First Name : </b><span>First Name</span>
                        </div>
                        <div>
                            <b>Last Name : </b><span>Last Name</span>
                        </div>
                        <div>
                            <b>Age : </b><span>Last Name</span>
                        </div>
                        <div>
                            <b>Allergies : </b><span>Last Name</span>
                        </div>
                        <div>
                            <b>Primary Doctor : </b><span>Last Name</span>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="inherit" noWrap>
                            Vitals
                        </Typography>
                    </Paper>
                </Grid>
            
            
            </Grid>
          </div>
        );
    }
}

PatientProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientProfile);