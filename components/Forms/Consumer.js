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
} from '../../store'

class Consumer extends React.Component {
    state = {
        items: []
    }
    
    componentWillMount() {
        this.state.items = this.props.items
    }

    handleSwitchChange = (e) => (index) => {

        let itemsCopy = this.state.items;
        itemsCopy[index].answer = !itemsCopy[i].answer
        this.setState({
            items: itemsCopy
        })

    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.row}>
                    {
                        this.state.items.map((item, index) => {
                            switch(item.label) {
                                case 'text':
                                    return(
                                        <TextField 
                                            label={item.q_label}
                                        />
                                    )
                                case 'radio':
                                    let answer = "No";
                                    if(item.answer) {
                                        answer = "Yes";
                                    }
                                    return(
                                        <div>
                                            <div>{item.q_label}</div>  
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={item.answer}
                                                        onChange={() => {
                                                            let itemsCopy = this.state.items;
                                                            itemsCopy[index].answer = !itemsCopy[index].answer
                                                            this.setState({
                                                                items: itemsCopy
                                                            })
                                                        }}
                                                        value={item.answer}
                                                        color="primary"
                                                    />
                                                }
                                                label={answer}
                                            />
                                        </div>
                                    )
                                default:
                                    return(
                                        <div>Hello man</div>
                                    )
                                 
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

Consumer.propTypes = {
    classes: PropTypes.object,
};

const styles = theme => ({
    row: {
        display: 'flex',
        width: '60vw',
        flexDirection: 'column'
    },
    textField: {
        marginRight: '10px'
    },
    root: {
        padding: '30px'
    }
});

function mapStateToProps (state) {
    const  { items } = state
    return { items }
}

export default connect(mapStateToProps)(withStyles(styles)(Consumer));