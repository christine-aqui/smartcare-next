import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';

class Consumer extends React.Component {
    state = {
        items: []
    }
    
    componentWillMount() {
        this.state.items = this.props.items
    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.row}>
                    {
                        this.state.items.map((item) => {
                            switch(item.label) {
                                case 'text':
                                    return(
                                        <TextField 
                                            label={item.q_label}
                                        />
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