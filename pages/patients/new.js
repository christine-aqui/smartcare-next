import React from 'react'
import {connect} from 'react-redux'

import AppBar from '../../components/protected/AppBar'


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
          Ready to Make a New Patient
      </div>
    )
  }
}

export default connect()(Index)
