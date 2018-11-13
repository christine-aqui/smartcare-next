import React from 'react'
import {connect} from 'react-redux'

import AppBar from '../components/protected/AppBar'
import NurseActions from '../components/Nurse/NurseActions'


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
          <NurseActions />
      </div>
    )
  }
}

export default connect()(Index)
