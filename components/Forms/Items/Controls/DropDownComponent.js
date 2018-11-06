import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// store
import { 
    updateItems
} from '../../../../store'

class DropDownComponent extends React.Component {
    state = {
        title: 'Multiple Choices',
        options: [
            {
                label: 'Option A',
                value: false,
            }
        ],
        editMode: false,
        model: {}
    };

    componentWillMount() {
        this.state.model = this.props.inputItem
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleTextChange = event => {
        let itemsCopy = this.props.items;
        // fidn index
        this.props.items.map((aItem, i) => {
            if(aItem.uid == this.props.inputItem.uid) {
                itemsCopy[i].q_label
                    =  event.target.value

                const {dispatch} = this.props
                dispatch(updateItems(itemsCopy))
                this.setState({
                    model: itemsCopy[i]
                })
            }
        })
    };

    handleSelection = event => {
        let itemsCopy = this.props.items;
        // fidn index
        this.props.items.map((aItem, i) => {
            if(aItem.uid == this.props.inputItem.uid) {
                itemsCopy[i].selected
                    =  event.target.value

                const {dispatch} = this.props
                dispatch(updateItems(itemsCopy))
                this.setState({
                    model: itemsCopy[i]
                })
            }
        })
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <TextField
                    label="Question Title"
                    className={classes.textField}
                    value={this.state.model.q_label}
                    onChange={this.handleTextChange}
                    margin="normal"
                />
                {
                    this.state.model.options.map((option, index) => {
                        return(
                            <div>
                                <TextField
                                    className={classes.option}
                                    value={option.label}
                                    onChange={(e) => {

                                        let itemsCopy = this.props.items;
                                        // fidn index
                                        this.props.items.map((aItem, i) => {
                                            if(aItem.uid == this.props.inputItem.uid) {
                                                itemsCopy[i].options[index].label = e.target.value

                                                const {dispatch} = this.props
                                                dispatch(updateItems(itemsCopy))
                                                this.setState({
                                                    model: itemsCopy[i]
                                                })
                                            }
                                        })
                                    }}
                                    margin="normal"
                                />
                                <Button 
                                    size="small" 
                                    variant="contained" 
                                    className={classes.button}
                                    onClick={() => {

                                        let itemsCopy = this.props.items;

                                        this.props.items.map((aItem, i) => {
                                            if(aItem.uid == this.props.inputItem.uid) {
                                                let optionsCopy = itemsCopy[i].options;
                                                optionsCopy.splice(index, 1)
                                                itemsCopy[i].options = optionsCopy;
                                                
                                                const {dispatch} = this.props
                                                dispatch(updateItems(itemsCopy))
                                                
                                                this.setState({
                                                    model: itemsCopy[i]
                                                })
                                            }
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


                        let itemsCopy = this.props.items;

                        this.props.items.map((aItem, i) => {
                            if(aItem.uid == this.props.inputItem.uid) {
                                let optionsCopy = itemsCopy[i].options;
                                optionsCopy.push({
                                    label: 'Option Name',
                                    value: false,
                                })
                                itemsCopy[i].options = optionsCopy;
                                
                                const {dispatch} = this.props
                                dispatch(updateItems(itemsCopy))
                                
                                this.setState({
                                    model: itemsCopy[i]
                                })
                            }
                        })
                    }}
                >
                    Add +
                </Button>

                <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">{this.state.model.q_label}</InputLabel>
                    <Select
                        value={this.state.model.selected}
                        onChange={this.handleSelection}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                    >
                        {
                            this.state.model.options.map((item, index) => {
                                return (<MenuItem value={index}>{item.label}</MenuItem>)
                            })
                        }
                    </Select>
                </FormControl>
                </div>
            </div>
        )
    }
}

DropDownComponent.propTypes = {
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
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 270,
    }
});

function mapStateToProps (state) {
    const  { items } = state
    return { items }
}

export default connect(mapStateToProps)(withStyles(styles)(DropDownComponent));