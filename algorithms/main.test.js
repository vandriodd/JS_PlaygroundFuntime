// ↓ Syntax of test function ↓
/* test('String that defines the thing you're trying to test', (function that will run the actual code) => {
    'Run' the code with an expectation
}) */

import { expect, test } from 'vitest';
import { sum } from './cumulative_sum';
import { search } from './binary_search';
import { LRU } from './least_recently_used_cache';

// Cumulative sum
test('Cumulative sum of an array', () => {
  expect(sum([1, 3, 5, 7])).toBe(16);
  expect(sum([-2, -4, -8])).toBe(-14);
});

// Binary search
test('Binary search', () => {
  const arr = ['N', 'bee', '🐮', '💜', '🧸'];

  expect(search(arr, '🐮')).toBe(2);
  expect(search(arr, '💜')).toBe(3);
  expect(search(arr, '🧸')).toBe(4);
  expect(search(arr, '💔')).toBe(-1);
  expect(search(arr, 'N')).toBe(0);
  expect(search(arr, 'bee')).toBe(1);
});

// Least recently used cache
test('LRU Cache', () => {
  const cache = new LRU(5);
  cache.putItem('a', 1);
  cache.putItem('b', 2);
  cache.putItem('c', 3);
  cache.putItem('d', 4);
  cache.putItem('e', 5);
  cache.putItem('f', 6);
  expect(cache.getItem('a')).toBe(undefined);
});
