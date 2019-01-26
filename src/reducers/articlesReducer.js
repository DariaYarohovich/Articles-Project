import { DELETE_ARTICLE } from '../constants';
import mockArticles from '../fixtures';

export default (articles = mockArticles, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id);
        default:
            return articles;
    }
}