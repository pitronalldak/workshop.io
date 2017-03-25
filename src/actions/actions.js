export const ProjectBackground = 'ProjectBackground';
export const ArticleBackground = 'ArticleBackground';

export default class Actions {
    setProjectBackground = (date) => {
        return {
            type: ProjectBackground, payload: date
        }
    };
    setArticleBackground = (date) => {
        console.log(date);
        return {
            type: ArticleBackground, payload: date
        }
    }

}
