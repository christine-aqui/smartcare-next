import React from 'react'
import {connect} from 'react-redux'

import AppBar from '../../components/protected/AppBar'
import FormTemplates from '../../components/Forms/FormTemplates';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    }
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <div>
          <AppBar />
          <FormTemplates />
      </div>
    )
  }
}

export default connect()(Index)
