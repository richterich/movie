import {describe, expect, test} from '@jest/globals';
import {genresFilterPreloadedState} from './genres-preloaded-state';

describe('[features/filters] genres preloaded state', () => {
  test('should return an empty array for empty URLSearchParams', () => {
    const searchParams = new URLSearchParams();
    const result = genresFilterPreloadedState(searchParams);
    expect(result).toEqual([]);
  });

  test('should return an empty array when genres parameter is not present', () => {
    const searchParams = new URLSearchParams('otherParam=value');
    const result = genresFilterPreloadedState(searchParams);
    expect(result).toEqual([]);
  });

  test('should correctly extract a single genre from URLSearchParams', () => {
    const searchParams = new URLSearchParams('genres=Action');
    const result = genresFilterPreloadedState(searchParams);
    expect(result).toEqual(['Action']);
  });

  test('should return an array of genres when genres parameter is present', () => {
    const searchParams = new URLSearchParams('genres=Action,Adventure,Drama');
    const result = genresFilterPreloadedState(searchParams);
    expect(result).toEqual(['Action', 'Adventure', 'Drama']);
  });

  test('should handle multiple-word genres separated by commas', () => {
    const searchParams = new URLSearchParams('genres=Science Fiction,Fantasy,Drama');
    const result = genresFilterPreloadedState(searchParams);
    expect(result).toEqual(['Science Fiction', 'Fantasy', 'Drama']);
  });

  test('should handle genres separated by commas and whitespaces', () => {
    const searchParams = new URLSearchParams('genres=Science Fiction, Fantasy,   Drama');
    const result = genresFilterPreloadedState(searchParams);
    expect(result).toEqual(['Science Fiction', 'Fantasy', 'Drama']);
  });

  test('should handle leading and trailing whitespaces in genres parameter', () => {
    const searchParams = new URLSearchParams('genres=  Mystery,Thriller  ');
    const result = genresFilterPreloadedState(searchParams);
    expect(result).toEqual(['Mystery', 'Thriller']);
  });

  test('should handle case-insensitive genre names', () => {
    const searchParams = new URLSearchParams('genres=action,DRAMA,comedy');
    const result = genresFilterPreloadedState(searchParams);
    expect(result).toEqual(['action', 'DRAMA', 'comedy']);
  });

  test('should return an empty array when genres parameter is present but empty', () => {
    const searchParams = new URLSearchParams('genres=');
    const result = genresFilterPreloadedState(searchParams);
    expect(result).toEqual([]);
  });
});
