import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../protected/AppBar';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Item from './Items/Item';
import GetFormItem from './Items/FormItem'
var shortid = require('shortid');

// store
import { 
    updateItems
} from '../../store'

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
                label: 'multi-choice',
                options: [
                    {
                        label: 'Option A',
                        value: true,
                    }
                ]
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
        itemToAdd.uid = shortid.generate();
        items.push(itemToAdd);

        const {dispatch} = this.props
        dispatch(updateItems(items))

        this.setState({items: this.props.items});
    };

    deleteItem = (e) => (index) => {
        let itemsCopy = this.state.items;
        itemsCopy.splice(index, 1)

        const {dispatch} = this.props
        dispatch(updateItems(itemsCopy))

        this.setState({
            items: this.props.items
        })
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <AppBar />
                
                <div className={classes.selectRow}>
                <Grid container spacing={24}>
                    <Grid item xs={3} sm={3} className={classes.subRow}>
                        {
                            this.state.formObjects.map((item, index) => {
                                return(
                                    <DragDropContainer 
                                        targetKey="foo"
                                        onDrop={() => {
                                            this.setState({
                                                selectedObject: item
                                            })
                                        }}
                                        disappearDraggedElement={true}
                                    >   
                                        <Paper className={classes.paper}>
                                            <Item formItem={item} />
                                        </Paper>
                                    </DragDropContainer>
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {
                            this.state.items.map((item, index) => {
                                return(
                                    <div className={classes.row}>
                                        <GetFormItem formItem={item} />
                                        <IconButton 
                                            aria-label="Delete" 
                                            className={classes.button}
                                            onClick={this.deleteItem(index)}
                                        > 
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
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
    },
    button: {
        margin: theme.spacing.unit,
        borderRadius: '0px',
        border: '1px dotted'
    }
});

function mapStateToProps (state) {
    const  { items } = state
    return { items }
}

export default connect(mapStateToProps)(withStyles(styles)(Builder));