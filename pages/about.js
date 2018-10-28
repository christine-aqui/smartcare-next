import {connect} from 'react-redux'

//components
import MiniDrawer from '../components/MiniDrawer';

function About ({ lastUpdate, light }) {
  return (
    <div>
      <MiniDrawer showAbout="true"/>
    </div>
  )
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(About)
