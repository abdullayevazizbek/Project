export const CATEGORY_OPEN = 'CategoryOpen'
export const CATEGORY_CLOSE = 'CategoryClose'

const initialState = {
    categoryModal: false,
}

function ModalReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORY_OPEN:
            return { ...state, categoryModal: true }

        case 'CategoryClose':
            return { ...state, categoryModal: false }
        default:
            return state
    }
}

export default ModalReducer

export const CategoryOpenAC = () => ({ type: CATEGORY_OPEN })
export const CategoryCloseAC = () => ({ type: CATEGORY_CLOSE })
