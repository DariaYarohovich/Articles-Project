import { createSelector } from 'reselect';

export const articlesMapSelector = store => store.articles.entities;
export const articlesSelector = createSelector(
    articlesMapSelector,
    (articlesMap) => articlesMap.valueSeq().toArray()
);
export const filtersSelector = store => store.filters;
export const idSelector = (_, ownProps) => ownProps.id;
export const loadingSelector = store => store.articles.loading;
export const loadedSelector = store => store.articles.loaded;

export const commentsSelector = store => store.comments.entities;
export const loadingCommentsSelector = store => store.comments.loading;
export const loadedCommentsSelector = store => store.comments.loaded;

export const filteredArticlesSelector = createSelector(
    filtersSelector,
    articlesSelector,
    (filters, articles) => {
        const {
            startDate,
            endDate,
            selectedTitles
        } = filters;

        return articles
            .filter(article => {
                let titleIsValid = true;
                let startDateIsValid = true;
                let endDateIsVaid = true;

                if (selectedTitles && selectedTitles.length) {
                    titleIsValid = selectedTitles.filter(title => title.value === article.id).length === 1;
                }

                if (startDate) {
                    startDateIsValid = new Date(article.date) >= startDate;
                }

                if (endDate) {
                    endDateIsVaid = new Date(article.date) <= endDate;
                }

                return titleIsValid && startDateIsValid && endDateIsVaid;
            })
    }
);

export const createCommentSelector = () => createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
        return comments.get(id);
    }
);