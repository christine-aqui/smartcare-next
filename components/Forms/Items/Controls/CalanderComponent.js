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
            <TextField
                type="datetime-local"
                className={classes.textField}
                defaultValue="2017-05-24T10:30"
                onChange={this.handleTextChange}
                margin="normal"
            />
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