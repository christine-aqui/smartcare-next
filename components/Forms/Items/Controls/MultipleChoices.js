import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import update from 'immutability-helper';

class MultipleChoices extends React.Component {
    state = {
        title: 'Multiple Choices',
        options: [
            {
                label: 'Option A',
                value: false,
            }
        ],
        editMode: false
    };
    
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleTextChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return(
            <div>
                <TextField
                    label="Title"
                    className={classes.textField}
                    value={this.state.title}
                    onChange={this.handleTextChange('title')}
                    margin="normal"
                />
                {
                    this.state.options.map((option, index) => {
                        return(
                            <div>
                                <Checkbox 
                                    checked={option.value} 
                                    onChange={this.handleChange(option)} 
                                    value="op_a" 
                                />
                                <TextField
                                    className={classes.option}
                                    value={option.label}
                                    onChange={(e) => {
                                        let optionsCopy = this.state.options;
                                        optionsCopy[index].label = e.target.value
                                        this.setState({
                                            options: optionsCopy
                                        })
                                    }}
                                    margin="normal"
                                />
                                <Button 
                                    size="small" 
                                    variant="contained" 
                                    className={classes.button}
                                    onClick={() => {
                                        let optionsCopy = this.state.options;
                                        optionsCopy.splice(index, 1)
                                        this.setState({
                                            options: optionsCopy
                                        })
                                    }}
                                    disabled={index == 0}
                                >
                                    Delete -
                                </Button>
                            </div>
                        )
                    })
                }
                <Button 
                    size="small" 
                    variant="contained" 
                    className={classes.button}
                    onClick={() => {
                        let optionsCopy = this.state.options;
                        optionsCopy.push({
                            label: 'Option Name',
                            value: false,
                        })
                        this.setState({

                        })
                    }}
                >
                    Add +
                </Button>
            </div>
        )
    }
}

MultipleChoices.propTypes = {
    classes: PropTypes.object,
};

const styles = theme => ({
    root: {},
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    option: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        marginTop: 'auto'
    }
});

export default withStyles(styles)(MultipleChoices);