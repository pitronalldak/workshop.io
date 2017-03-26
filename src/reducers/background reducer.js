import objectAssign from 'object-assign';

import { ProjectBackground } from '../actions/actions';

const initialState = {
    ProjectBackground: 'project1',
};

export default function backgroundReducer(state = initialState, action) {
    switch (action.type) {
        case ProjectBackground:
            return objectAssign({}, state, {ProjectBackground: action.payload});
        default:
            return state;
    }
}
