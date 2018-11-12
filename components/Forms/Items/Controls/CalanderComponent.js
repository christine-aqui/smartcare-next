import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

// store
import { 
    updateItems
} from '../../../../store'


class CalanderComponent extends React.Component {
    state = {
        model: {}
    }
    componentWillMount() {
        this.state.model = this.props.inputItem
    }

    handleTextChange = (e) => {
        let itemsCopy = this.props.items;
        // fidn index
        this.props.items.map((aItem, i) => {
            if(aItem.uid == this.props.inputItem.uid) {
                itemsCopy[i].val = e.target.value

                const {dispatch} = this.props
                dispatch(updateItems(itemsCopy))
                this.setState({
                    model: itemsCopy[i]
                })
            }
        })
    }

    handleLabelChange = (e) => {
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

    render() {
        const { classes } = this.props;
        return(
            <div>
                <TextField
                    label="Question Label"
                    className={classes.textField}
                    value={this.state.model.q_label}
                    onChange={this.handleLabelChange}
                    margin="normal"
                />
                <TextField
                    type="datetime-local"
                    className={classes.textField}
                    defaultValue={this.state.model.val}
                    onChange={this.handleTextChange}
                    margin="normal"
                />
            </div>
        )
    }
}

CalanderComponent.propTypes = {
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
        width: 400,
    },
});

function mapStateToProps (state) {
    const  { items } = state
    return { items }
}

export default connect(mapStateToProps)(withStyles(styles)(CalanderComponent));