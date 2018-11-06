import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


import { connect } from 'react-redux';

// store
import { 
    updateItems
} from '../../../../store'


class RadioComponent extends React.Component {
    state = {
        model: {}
    }
    constructor(props) {
        super(props);
        this.state.model = this.props.inputItem
    }
    // componentWillMount() {
    //     this.state.model = this.props.inputItem
    // }

    handleTextChange = (e) => {
        let itemsCopy = this.props.items;
        // fidn index
        this.props.items.map((aItem, i) => {
            if(aItem.uid == this.props.inputItem.uid) {
                itemsCopy[i].q_label = e.target.value

                const {dispatch} = this.props
                dispatch(updateItems(itemsCopy))
                this.setState({
                    model: itemsCopy[i]
                })
            }
        })
    }

    handleSwitchChange = (e) => {
        let itemsCopy = this.props.items;
        // fidn index
        this.props.items.map((aItem, i) => {
            if(aItem.uid == this.props.inputItem.uid) {
                itemsCopy[i].answer = !itemsCopy[i].answer

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
        let answer = "No";
        if(this.state.model.answer) {
            answer = "Yes";
        }
        return(
            <div>
                <TextField
                    label="Question Title"
                    className={classes.textField}
                    value={this.state.model.q_label}
                    onChange={this.handleTextChange}
                    margin="normal"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.model.answer}
                            onChange={this.handleSwitchChange}
                            value={this.state.model.answer}
                            color="primary"
                        />
                    }
                    label={answer}
                />
            </div>
        )
    }
}

RadioComponent.propTypes = {
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
});

function mapStateToProps (state) {
    const  { items } = state
    return { items }
}

export default connect(mapStateToProps)(withStyles(styles)(RadioComponent));