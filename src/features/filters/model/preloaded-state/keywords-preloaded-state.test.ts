import {describe, expect, test} from '@jest/globals';
import {keywordsFilterPreloadedState} from './keywords-preloaded-state';

describe('[features/filters] keywords preloaded state', () => {
  test('should return an empty array for empty URLSearchParams', () => {
    const searchParams = new URLSearchParams();
    const result = keywordsFilterPreloadedState(searchParams);
    expect(result).toEqual([]);
  });

  test('should return an empty array when keywords parameter is not present', () => {
    const searchParams = new URLSearchParams('otherParam=value');
    const result = keywordsFilterPreloadedState(searchParams);
    expect(result).toEqual([]);
  });

  test('should correctly extract a single keyword from URLSearchParams', () => {
    const searchParams = new URLSearchParams('keywords=superhero');
    const result = keywordsFilterPreloadedState(searchParams);
    expect(result).toEqual(['superhero']);
  });

  test('should return an array of keywords when keywords parameter is present', () => {
    const searchParams = new URLSearchParams('keywords=superhero,chaos,joker');
    const result = keywordsFilterPreloadedState(searchParams);
    expect(result).toEqual(['superhero', 'chaos', 'joker']);
  });

  test('should handle multiple-word keywords separated by commas', () => {
    const searchParams = new URLSearchParams('keywords=anti hero,superhero,joker');
    const result = keywordsFilterPreloadedState(searchParams);
    expect(result).toEqual(['anti hero', 'superhero', 'joker']);
  });

  test('should handle keywords separated by commas and whitespaces', () => {
    const searchParams = new URLSearchParams('keywords=anti hero, superhero,   joker');
    const result = keywordsFilterPreloadedState(searchParams);
    expect(result).toEqual(['anti hero', 'superhero', 'joker']);
  });

  test('should handle leading and trailing whitespaces in keywords parameter', () => {
    const searchParams = new URLSearchParams('keywords=  joker,superhero  ');
    const result = keywordsFilterPreloadedState(searchParams);
    expect(result).toEqual(['joker', 'superhero']);
  });

  test('should handle case-insensitive keywords names', () => {
    const searchParams = new URLSearchParams('keywords=superhero,CHAOS,superhero');
    const result = keywordsFilterPreloadedState(searchParams);
    expect(result).toEqual(['superhero', 'CHAOS', 'superhero']);
  });

  test('should return an empty array when keywords parameter is present but empty', () => {
    const searchParams = new URLSearchParams('keywords=');
    const result = keywordsFilterPreloadedState(searchParams);
    expect(result).toEqual([]);
  });
});
