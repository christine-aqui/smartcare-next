import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';

import { 
    deleteField, 
} from '../../store'

class VitalSigns2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [],
            open: false,
            value: ''
        }
    }

    componentDidMount() {
        this.setState({
            fields: this.props.fields
        })
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleCreate = event => {
        let newField = { label: this.state.value }
        const fields = this.state.fields;
        fields.push(newField);

        const {dispatch} = this.props
        dispatch(deleteField(fields))
        this.setState({
            fields: this.props.fields,
            open: false
        })
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    handleFieldChange = (i, event) => {
        const label = this.props.fields[i].label
        let fields = [
            ...this.state.fields.slice(0, i),
            Object.assign({}, this.state.fields[i], { label: label, val: event.target.value}),
            ...this.state.fields.slice(i + 1)
        ]
        const {dispatch} = this.props
        dispatch(deleteField(fields))
        this.setState({
            fields: fields
        });
    };

    render() {
        const { classes } = this.props;
        const fields = this.props.fields;
        return(
            <div>
                <Button 
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    Add New
                </Button>
                {
                    this.state.fields.map( (field, i) => {
                        return(
                            <div className={classes.row}>
                                <TextField
                                    label={field.label}
                                    margin="normal"
                                    multiline
                                    className={classes.textField}
                                    fullWidth
                                    value={field.val}
                                    onChange={this.handleFieldChange.bind(this, i)}
                                />
                                <IconButton className={classes.button} 
                                            aria-label="Delete"
                                            onClick={() => {
                                                const {dispatch} = this.props
                                                fields.splice(i, 1);
                                                dispatch(deleteField(fields))
                                                this.setState({
                                                    fields: this.props.fields
                                                })
                                            }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        )
                    })
                }

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add New Field</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Field Name"
                            fullWidth
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleCreate} color="primary" variant="contained" >
                                Create
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

VitalSigns2.propTypes = {
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
    button: {
        margin: theme.spacing.unit,
        marginTop: '30px',
        border: '1px dashed'
    }
});

function mapStateToProps (state) {
    const { fields } = state
    return { fields }
}

export default connect(mapStateToProps)(withStyles(styles)(VitalSigns2));