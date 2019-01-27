import { string, shape, arrayOf } from 'prop-types';

export const commentInstanceType = shape({
    user: string,
    text: string
});

export const articleType = shape({
    id: string,
    date: string,
    title: string,
    text: string,
    comments: arrayOf(string)
});