import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results.js';

import Group from '../Group/Group.js';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<Results />);	
});

afterEach(() => {
	wrapped.unmount();	
});

describe('the Group component.', () => {

	it('shows.', () => {
		expect(wrapped.find(Group).length).toEqual(1);
	});

});