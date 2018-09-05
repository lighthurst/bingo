import React from 'react';
import TicketDisplay from '../../src/components/TicketDisplay';
import exampleTickets from '../../../assets/exampleData';

/**
 * Factory function to create a shallow wrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  // eslint-disable-next-line no-undef
  const wrapper = shallow(<TicketDisplay {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('render without error', () => {
  const props = { tickets: exampleTickets };
  const wrapper = setup(props);
  const ticketDisplayComponent = findByTestAttr(wrapper, 'component-ticket-display');
  expect(ticketDisplayComponent.length).toBe(1);
});