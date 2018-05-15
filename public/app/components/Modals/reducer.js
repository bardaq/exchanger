import { MODAL_IS_OPEN } from '../../constants';

const initialState = {
	isOpen: false,
	modalType: 'contacts'
}

export default function updateMethod(state = initialState, action) {

	switch (action.type) {

		case MODAL_IS_OPEN:
			return { ...state, isOpen: action.payload.isOpen, modalType: action.payload.modalType }

		default:
			return state
	}
}

