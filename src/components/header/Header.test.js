import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

enzyme.configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    return  shallow(<Header {...props} />);
};

const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
}

describe('Header Component Test', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('It should render without errors', () => {
        const wrapper = findByTestAttr(component, 'header');
        expect(wrapper.length).toBe(1);
    });
    it('Should render a logo', () => {
        const wrapper = findByTestAttr(component,'logo-image');
        expect(wrapper.length).toBe(1);
    });
}); 