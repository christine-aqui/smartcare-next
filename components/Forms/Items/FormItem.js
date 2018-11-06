import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Icons 
import {    FaListUl,
            FaCheckSquare
} from 'react-icons/fa'

// Components
import MultipleChoices from './Controls/MultipleChoices';


function GetFormItem(item) {
    switch(item.label) {
        case 'radio': 
            return(
                <MultipleChoices inputItem={item}/>
            )
        case 'multi-choice':
            return(
                <MultipleChoices inputItem={item}/>
            )
        default:
            return(
                <FaListUl />
            )
    }
}

class FormItem extends React.Component {
    state ={};

    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return(
            <div>
                 <GetFormItem {...this.props.formItem}/>
                 <div>

                 </div>
            </div>
        )
    }
}

FormItem.propTypes = {
    classes: PropTypes.object,
};

const styles = theme => ({
    root: {},
    icons: {
        paddingRight: '10px'
    }
});

export default withStyles(styles)(FormItem);