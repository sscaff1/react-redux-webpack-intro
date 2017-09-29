export default (state = {}, action) => {
	switch (action.type) {
		case 'SHOW_COUNTRY':
			return { ...state, showCountryField: true };
		case 'TOGGLE_LOADING':
			return { ...state, loading: action.loading };
		case 'FOCUS_ON_FIELD':
			return { ...state, focusField: action.focusField };
		case 'SUBMIT_FORM':
			return { ...state, formSubmitted: true };
		default:
			return state;
	}
};
