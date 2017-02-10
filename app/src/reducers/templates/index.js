import {combineReducers} from 'redux'

export const setApp = (state = {app: 'react-init'}, action) => {
	switch(action.type) {
		case 'set_app':
			return {
				app: action.text
			}
		default:
			return state
	}
}



export default combineReducers({
	setApp
})
