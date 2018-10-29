
import actionTypes from '../store'
// import reducer from '../store'

export const updateBasicForm = (payload) => dispatch => {
    return dispatch({ type: actionTypes.UPDATEBASICFORM, payload: payload })
}