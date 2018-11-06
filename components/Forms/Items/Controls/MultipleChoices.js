import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';


// store
import { 
    updateItems
} from '../../../../store'

class MultipleChoices extends React.Component {
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
                    this.state.model.options.map((option, index) => {
                        return(
                            <div>
                                <Checkbox 
                                    checked={option.value} 
                                    onChange={() => {

                                        let itemsCopy = this.props.items;
                                        // fidn index
                                        this.props.items.map((aItem, i) => {
                                            if(aItem.uid == this.props.inputItem.uid) {
                                                itemsCopy[i].options[index].value 
                                                    = !itemsCopy[i].options[index].value

                                                const {dispatch} = this.props
                                                dispatch(updateItems(itemsCopy))
                                                this.setState({
                                                    model: itemsCopy[i]
                                                })
                                            }
                                        })
                                    }}
                                    value={option.value} 
                                />
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

function mapStateToProps (state) {
    const  { items } = state
    return { items }
}

export default connect(mapStateToProps)(withStyles(styles)(MultipleChoices));