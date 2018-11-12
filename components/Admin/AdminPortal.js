import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { MdClearAll,
         MdPeople,
         MdPermDataSetting,
         MdModeEdit,
         MdQueue,
         MdSettings
} from 'react-icons/md'

import Router from 'next/router';


class AdminPortal extends React.Component {
    state= {
        existingForms: []
    }
    componentWillMount() {
        axios.get('https://smartapinode.herokuapp.com/custom-forms')
            .then((res) => {
                this.setState({ existingForms: res.data.forms })
            })
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid 
                    container 
                    spacing={24}
                    className={classes.container}
                >
                    <Grid item xs={4}>
                        <Paper className={classes.root} elevation={1}>
                            <Typography variant="h5" component="h3">
                                Existing Forms
                            </Typography>
                            <List component="nav">
                            {
                                this.state.existingForms.map((item) => {
                                    return(
                                        <ListItem>
                                            <ListItemIcon>
                                                <MdClearAll />
                                            </ListItemIcon>
                                            <ListItemText>{item.formFormat.formName}</ListItemText>
                                            <Button variant="outlined" color="primary" aria-label="Edit" className={classes.button}>
                                                <MdModeEdit />
                                            </Button>
                                        </ListItem>
                                    )
                                })
                            }
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.root} elevation={1}>
                            <Typography variant="h5" component="h3">
                                Admin Actions
                            </Typography>
                            <List component="nav">
                                <ListItem button>
                                    <ListItemIcon>
                                        <MdPeople />
                                    </ListItemIcon>
                                    <ListItemText>Add User</ListItemText>
                                </ListItem>
                                <ListItem button onClick={
                                    () => {
                                        Router.push(`/test`);
                                    }
                                }>
                                    <ListItemIcon>
                                        <MdQueue />
                                    </ListItemIcon>
                                    <ListItemText>Create New Form</ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <MdPermDataSetting />
                                    </ListItemIcon>
                                    <ListItemText>Theme Settings</ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <MdSettings />
                                    </ListItemIcon>
                                    <ListItemText>Organization Settings</ListItemText>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    container: {
        paddingTop: '50px',
        paddingLeft: '10px',
        paddingRight: '10px'
    }
});

AdminPortal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminPortal);