import React from 'react';
import { mount } from 'enzyme';
import ArticleList from './ArticleList';
import mockedArticles from '../../fixtures';

describe('Article List', function () {
    it('should close an article', (done) => {
        const wrapper = mount(<ArticleList articles={mockedArticles}/>);

        expect(wrapper.find('.article-item__body').length).toEqual(0);
        clickArticleButton(wrapper);
        expect(wrapper.find('.article-item__body').length).toEqual(1);
        clickArticleButton(wrapper);
        
        setTimeout(() => {
            try {
                wrapper.simulate('transitionEnd');
                expect(wrapper.find('.article-item__body').length).toEqual(0);
                done();
            } catch(error) {
                done.fail(error);
            }
        }, 800)
    })

    function clickArticleButton(wrapper) {
        wrapper.find('.article-item__title').at(0).simulate('click');
    }
})