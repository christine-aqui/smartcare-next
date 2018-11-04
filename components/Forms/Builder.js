import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../protected/AppBar';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Item from './Items/Item';
var shortid = require('shortid');

class Builder extends React.Component {
    state ={
        formObjects: [
            {
                label:'text'
            },
            {
                label: 'radio'
            },
            {
                label: 'multi-choice'
            }
        ],
        items: [],
        selectedObject: {}
    };
    constructor(props) {
        super(props);
    }


    handleDrop = (e) => {
        e.stopPropagation();
        let items = this.state.items.slice();
        let itemToAdd = this.state.selectedObject
        items.push({label: itemToAdd.label, uid: shortid.generate()});
        this.setState({items: items});
    };

    render() {
        const { classes } = this.props;
        return(
            <div>
                <AppBar />
                
                <div className={classes.selectRow}>
                <Grid container spacing={24}>
                    <Grid item xs={3} sm={3} className={classes.subRow}>
                        {
                            this.state.formObjects.map((item) => {
                                return(
                                    <DragDropContainer 
                                        targetKey="foo"
                                        onDrop={() => {
                                            console.log('I am called')
                                            this.setState({
                                                selectedObject: item
                                            })
                                        }}
                                        disappearDraggedElement={true}
                                    >   
                                        <Paper className={classes.paper}>
                                            <Item formItem={item}/>
                                        </Paper>
                                    </DragDropContainer>
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {
                            this.state.items.map((item) => {
                                return(
                                    <div>{item.label}</div>
                                )
                            })
                        }
                        <DropTarget 
                            targetKey="foo"
                            onHit={this.handleDrop}
                            dropData={{label: 'lol'}}
                        >
                            <Grid item xs={6} className={classes.target}>
                                Drop An Item Here to Add
                            </Grid>
                        </DropTarget>
                    </Grid>
                </Grid>
                </div>
            </div>
        )
    }

}

Builder.propTypes = {
    classes: PropTypes.object,
};

const styles = theme => ({
    row: {
        display: 'flex',
        width: '60vw'
    },
    textField: {
        marginRight: '10px'
    },
    drop: {
        display: 'flex',
        border: '2px solid red'
    },
    selectRow: {
        display: 'flex'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        flexDirection: 'column'
    },
    subRow: {
        display: 'flex',
        flexDirection: 'column',
    },
    target: {
        width: '100%',
        height: '20vh',
        border: '2px dotted pink',
        textAlign: 'center'
    }
});

export default withStyles(styles)(Builder);