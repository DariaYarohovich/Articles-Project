import { createSelector } from 'reselect';

export const articlesSelector = store => store.articles;
export const filtersSelector = store => store.filters;
export const commentsSelector = store => store.comments;
export const idSelector = (_, ownProps) => ownProps.id;

export const filteredArticlesSelector = createSelector(
    filtersSelector,
    articlesSelector,
    (filters, articles) => {
        const {
            startDate,
            endDate,
            selectedTitles
        } = filters;

        return Object.keys(articles)
            .filter(id => {
                let titleIsValid = true;
                let startDateIsValid = true;
                let endDateIsVaid = true;

                if (selectedTitles && selectedTitles.length) {
                    titleIsValid = selectedTitles.filter(title => title.value === articles[id].id).length === 1;
                }

                if (startDate) {
                    startDateIsValid = new Date(articles[id].date) >= startDate;
                }

                if (endDate) {
                    endDateIsVaid = new Date(articles[id].date) <= endDate;
                }

                return titleIsValid && startDateIsValid && endDateIsVaid;
            })
            .map(id => ({
                id: articles[id].id,
                date: articles[id].date,
                title: articles[id].title,
                text: articles[id].text,
                comments: articles[id].comments
            }))
    }
);

export const createCommentSelector = () => createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
        return comments[id];
    }
);