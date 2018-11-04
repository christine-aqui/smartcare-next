import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../protected/AppBar';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Item from './Items/Item';

class Builder extends React.Component {
    state ={
        targets: {
            'textArea': ''
        }
    };
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        const dragData = [
            {
                label: 'multipleChoice'
            },
            {
                label: 'radio'
            }
        ]
        return(
            <div>
                <AppBar />
                
                <div className={classes.selectRow}>
                <Grid container spacing={24}>
                    <Grid item xs={3} sm={3} className={classes.subRow}>
                        {
                            dragData.map((item) => {
                                return(
                                    <DragDropContainer 
                                        key={item.label}
                                        targetKey="foo"
                                        dragData={dragData} 
                                        onDrop={() => {
                                            console.log('----> Dropped');
                                        }}
                                        // onDragStart={some method} 
                                        // onDrag={some method} 
                                        // onDragEnd={some method} 
                                    >   
                                        <Paper className={classes.paper}>
                                            <Item formItem={item}/>
                                        </Paper>
                                    </DragDropContainer>
                                );
                            })
                        }
                    </Grid>
                    <Grid item xs={8} sm={3}>
                        Here will be the Form
                    </Grid>
                </Grid>
                </div>
                {/* <DragDropContainer 
                    targetKey="foo"
                    dragData={dragData} 
                    onDrop={() => {
                        console.log('----> Dropped');
                    }}
                    // onDragStart={some method} 
                    // onDrag={some method} 
                    // onDragEnd={some method} 
                >
                    <div>Drag Me!</div>
                </DragDropContainer>

                <div className={classes.drop}>
                    <DropTarget 
                        targetKey="foo"
                        dropData={dragData} 
                        onHit={() => {
                            console.log('Added Data');
                        }}
                        onDragEnter={() => {
                            console.log('Enter SandMan')
                        }} 
                        // onDragLeave={some function} 
                    >
                        <p>I'm a valid drop target for the object above since we both have the same targetKey!</p>
                    </DropTarget>
                </div> */}
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
        display: 'flex',
        border: '2px solid pink'
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
    }
});

export default withStyles(styles)(Builder);