import {connect} from 'react-redux'

//components
import MiniDrawer from '../components/MiniDrawer';

function List ({ lastUpdate, light }) {
  return (
    <div>
      <MiniDrawer showList="true"/>
    </div>
  )
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(List)
