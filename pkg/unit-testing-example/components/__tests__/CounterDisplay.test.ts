import { describe, expect, it } from '@jest/globals';
import { shallowMount } from '@vue/test-utils';

import CounterDisplay from '../CounterDisplay.vue';

describe('CounterDisplay', () => {
  it('renders the title prop', () => {
    const wrapper = shallowMount(CounterDisplay, { props: { title: 'My Counter', initial: 0 } });

    expect(wrapper.find('h1.title').text()).toStrictEqual('My Counter');
  });

  it('renders the initial count', () => {
    const wrapper = shallowMount(CounterDisplay, { props: { title: 'Counter', initial: 7 } });

    expect(wrapper.find('[data-testid="count"]').text()).toBe('7');
  });

  it('renders the initial doubled value', () => {
    const wrapper = shallowMount(CounterDisplay, { props: { title: 'Counter', initial: 4 } });

    expect(wrapper.find('[data-testid="doubled"]').text()).toBe('8');
  });

  it('increments the count when the + button is clicked', async() => {
    const wrapper = shallowMount(CounterDisplay, { props: { title: 'Counter', initial: 0 } });

    await wrapper.find('[data-testid="btn-increment"]').trigger('click');
    expect(wrapper.find('[data-testid="count"]').text()).toBe('1');
  });

  it('decrements the count when the - button is clicked', async() => {
    const wrapper = shallowMount(CounterDisplay, { props: { title: 'Counter', initial: 5 } });

    await wrapper.find('[data-testid="btn-decrement"]').trigger('click');
    expect(wrapper.find('[data-testid="count"]').text()).toBe('4');
  });

  it('resets the count when the Reset button is clicked', async() => {
    const wrapper = shallowMount(CounterDisplay, { props: { title: 'Counter', initial: 3 } });

    await wrapper.find('[data-testid="btn-increment"]').trigger('click');
    await wrapper.find('[data-testid="btn-reset"]').trigger('click');
    expect(wrapper.find('[data-testid="count"]').text()).toBe('3');
  });
});
