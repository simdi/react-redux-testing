import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Headline from './Headline';
import { findByTestAttr, checkProps } from '../../utils';

enzyme.configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    return  shallow(<Headline {...props} />);
};

describe('Headline Component Test', () => {
    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                header: 'Testing Header',
                desc: 'Testing Desc',
            }
            component = setUp(props);
        });
        it('It should render without errors', () => {
            const wrapper = findByTestAttr(component, 'headline');
            expect(wrapper.length).toBe(1);
        });
        it('Should render a Header', () => {
            const wrapper = findByTestAttr(component, 'header');
            expect(wrapper.length).toBe(1);
        });
        it('Should render a desc', () => {
            const wrapper = findByTestAttr(component,'desc');
            expect(wrapper.length).toBe(1);
        });
    });

    describe('Have NO props', () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('It should not render', () => {
            const wrapper = findByTestAttr(component, 'headline');
            expect(wrapper.length).toBe(0);
        });
    });

    describe('Checking Proptypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'Test email',
                    age: 34,
                    onlineStatus: false,
                }],
            };
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined();
        })
    });
});