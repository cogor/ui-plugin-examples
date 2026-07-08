import { describe, expect, it } from '@jest/globals';

import { useCounter } from '../useCounter';

describe('useCounter', () => {
  it('initializes with default value of 0', () => {
    const { count, doubled } = useCounter();

    expect(count.value).toBe(0);
    expect(doubled.value).toBe(0);
  });

  it('initializes with a provided value', () => {
    const { count, doubled } = useCounter(5);

    expect(count.value).toBe(5);
    expect(doubled.value).toBe(10);
  });

  it('increments the count', () => {
    const { count, increment } = useCounter(0);

    increment();
    expect(count.value).toBe(1);
  });

  it('decrements the count', () => {
    const { count, decrement } = useCounter(5);

    decrement();
    expect(count.value).toBe(4);
  });

  it('resets to the initial value', () => {
    const { count, increment, reset } = useCounter(3);

    increment();
    increment();
    reset();
    expect(count.value).toBe(3);
  });

  it('updates doubled reactively when count changes', () => {
    const { doubled, increment } = useCounter(0);

    increment();
    expect(doubled.value).toBe(2);
  });
});
