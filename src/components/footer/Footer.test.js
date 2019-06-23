import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';
import { findByTestAttr, checkProps } from '../../utils';

enzyme.configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    return  shallow(<Footer {...props} />);
};

describe('Footer Component Test', () => {
    describe('Have NO props', () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('It should render', () => {
            const wrapper = findByTestAttr(component, 'footer');
            expect(wrapper.length).toBe(1);
        });
    });
});