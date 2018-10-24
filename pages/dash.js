import React from 'react'
import {connect} from 'react-redux'
import Link from 'next/link'

// Compoents
import MiniDrawer from '../components/MiniDrawer';


class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <div>
        <MiniDrawer />
      </div>
    )
  }
}

export default connect()(Index)
