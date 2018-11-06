import React from 'react'
import {connect} from 'react-redux'

import Consumer from '../components/Forms/Consumer'
import AppBar from '../components/protected/AppBar';


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
          <Consumer />
      </div>
    )
  }
}

export default connect()(Index)
