export const ProjectBackground = 'ProjectBackground';

export default class Actions {
    setProjectBackground = (date) => {
        return {
            type: ProjectBackground, payload: date
        }
    }
}