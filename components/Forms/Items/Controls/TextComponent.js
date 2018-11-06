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


class TextComponent extends React.Component {
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
                label="Question Label"
                className={classes.textField}
                value={this.state.model.q_label}
                onChange={this.handleTextChange}
                margin="normal"
            />
        )
    }
}

TextComponent.propTypes = {
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

export default connect(mapStateToProps)(withStyles(styles)(TextComponent));