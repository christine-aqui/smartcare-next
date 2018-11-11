import React from 'react'
import {connect} from 'react-redux'
import AppBar from '../components/protected/AppBar'

import AdminPortal from '../components/Admin/AdminPortal';


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
          <AdminPortal />
      </div>
    )
  }
}

export default connect()(Index)
