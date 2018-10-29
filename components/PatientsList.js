import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import Router from 'next/router';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'center'
  },
});

class PatientList extends React.Component {
  state = {
    checked: [1],
    patients: []
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  componentDidMount() {
    axios.get(`https://smartapinode.herokuapp.com/patients`).then((res) => {
        this.setState({ patients: res.data.patients })
    })
  }

  render() {
    const { classes } = this.props;

    return (
        <div>
        <h3>Patient Lists</h3>
        <div className={classes.root}>
            <List>
            {this.state.patients.map(patient => (
                <ListItem key={patient._id} dense button onClick={
                    () => {
                        Router.push(`/about?id=${patient._id}`)
                    }
                }>
                    <Avatar src="data:image/png;base64,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" />
                    <ListItemText primary={`${patient.firstname} ${patient.lastname}`} />
                </ListItem>
            ))}
            </List>
        </div>
      </div>
    );
  }
}

PatientList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientList);