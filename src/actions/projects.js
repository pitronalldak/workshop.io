export const SET_PROJECT_BACKGROUND = 'SET_PROJECT_BACKGROUND';

export default class ProjectsActions {
    setProjectBackground = (date) => {
        return {
            type: SET_PROJECT_BACKGROUND, payload: date
        }
    }
}