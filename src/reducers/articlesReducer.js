import {
    DELETE_ARTICLE,
    ADD_COMMENT_ID_IN_ARTICLE
} from '../constants';
import { normalizedArticles } from '../fixtures';

const initialArticles = normalizedArticles.reduce((acc, article) => {
    return {
        ...acc,
        [article.id]: article
    }
}, {})


export default (articles = initialArticles, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_ARTICLE:
            const { [payload.id]: value, ...updatedArticles } = articles;
            return updatedArticles;
        case ADD_COMMENT_ID_IN_ARTICLE:
            Object.keys(articles).map(id => {
                if (id === payload.articleId) {
                    articles[id].comments.push(payload.newCommentId);
                }
                return articles[id];
            })

            return articles;
        default:
            return articles;
    }
}