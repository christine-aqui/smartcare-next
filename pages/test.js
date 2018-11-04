import React from 'react'
import {connect} from 'react-redux'

import Builder from '../components/Forms/Builder'


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
          <Builder />
      </div>
    )
  }
}

export default connect()(Index)
