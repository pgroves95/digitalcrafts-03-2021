import Output from '../components/output'
import { connect } from 'react-redux'

function mapCountStateToProps(state) {
    return {
        amount: state.count
    }
}

export default connect(mapCountStateToProps)(Output)