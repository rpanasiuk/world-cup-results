import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

import Results from '../Results/Results.js';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<App />);	
});

afterEach(() => {
	wrapped.unmount();	
});

describe('the Results component.', () => {

	it('shows.', () => {
		expect(wrapped.find(Results).length).toEqual(1);
	});

});