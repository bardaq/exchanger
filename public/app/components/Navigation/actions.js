import { MODAL_IS_OPEN } from '../../constants'

export const actionToogleModalIsOpen = modalType => (dispatch, getState) => {
	dispatch({
		type: MODAL_IS_OPEN,
		payload: {
			isOpen: !getState().modalsReducer.isOpen,
			modalType: modalType
		}
	})
};