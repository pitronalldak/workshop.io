export const ProjectBackground = 'ProjectBackground';

export default class Actions {
    setProjectBackground = (date) => {
        console.log('setProjectBackground');
        return {
            type: ProjectBackground, payload: date
        }
    }
}
