import React from 'react';
import Enzyme, { render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleItem from './ArticleItem';

Enzyme.configure({ adapter: new Adapter() });

const mockArticle = {
    title: "ds",
    id: "ssf",
    text: "sdg",
    comments: []
}

describe('Article item', function () {
    it('should close if props "isOpen" equals false', function (done) {
        const wrapper = mount(<ArticleItem article={mockArticle} isOpen={true} toggleArticle={() => done()} />);

        wrapper.find('button').simulate('click');
    })
})