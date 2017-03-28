import objectAssign from 'object-assign';

import { SET_PROJECT_BACKGROUND } from '../actions/projects';

const initialState = {
    visibleProjectId: '',
};

export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROJECT_BACKGROUND:
            return objectAssign({}, state, {visibleProjectId: action.payload});
        default:
            return state;
    }
}
