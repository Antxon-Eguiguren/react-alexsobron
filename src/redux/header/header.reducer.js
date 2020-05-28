import { TOGGLE_HEADER_HIDDEN } from './header.actions';

const initialState = {
    headerHidden: false
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_HEADER_HIDDEN:
            return {
                ...state,
                headerHidden: !state.headerHidden
            };

        default:
            return state;
    }
};

export default headerReducer;