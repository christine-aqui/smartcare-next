import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
      paddingTop: '50px',
      paddingLeft: '50px'
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
        <Grid 
            container 
            spacing={24}
            className={classes.container}
        >
            <Grid item xs={10}>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                        Announcements
                    </Typography>
                    <Typography component="p">
                        All Inportant Announcements goes here
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);