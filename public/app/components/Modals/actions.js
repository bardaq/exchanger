import { MODAL_IS_OPEN } from '../../constants'

export const actionToogleModal = modalType => (dispatch, getState) => {
	dispatch({
		type: MODAL_IS_OPEN,
		payload: {
			isOpen: !getState().modalsReducer.isOpen,
			modalType: modalType
		}
	})
};