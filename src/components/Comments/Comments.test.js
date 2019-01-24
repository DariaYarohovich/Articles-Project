import React from 'react';
import {render, mount} from 'enzyme';
import Comments from './Comments';
import Comment from './Comment/Comment';

const mockComment = [
    {
        id: "sdcjd",
        user: "sdd",
        text: "sffs"
    }
];

describe('Comments list', function() {

    it('should display button if there is at least 1 comment', function() {
        const wrapper = mount(<Comments comments={mockComment}/>);

        expect(wrapper.find('.comments__button').length).toEqual(1);
    });

    it('should render without opened comments', function() {
        const wrapper = render(<Comments comments={mockComment} />);

        expect(wrapper.find('.comments__body').length).toEqual(0);
    });

    it('should open comments on click', function() {
        const wrapper = mount(<Comments comments={mockComment}/>);

        wrapper.find('.comments__button').simulate('click');
        expect(wrapper.find(Comment).length).toEqual(mockComment.length);
    });

    it('should toggle "open" props on click', function() {
        const wrapper = mount(<Comments comments={mockComment}/>);

        expect(wrapper.state('opened')).toEqual(false);
        wrapper.find('.comments__button').simulate('click');
        expect(wrapper.state('opened')).toEqual(true);
    })
});