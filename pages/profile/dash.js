import React from 'react'
import {connect} from 'react-redux'

//components
import AppBarMain from '../../components/protected/AppBar'
import PaperSheet from '../../components/protected/Paper'
import QuickLinks from '../../components/protected/QuickLinks'



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
        <AppBarMain />
        <PaperSheet />
        <QuickLinks />
      </div>
    )
  }
}

export default connect()(Index)