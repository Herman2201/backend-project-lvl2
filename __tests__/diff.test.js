import { test, expect } from '@jest/globals';
import genDiff from '../index.js';
import readFile from '../src/utils.js';

const filepath1 = 'file1.json';
const filepath2 = 'file2.json';
const filepath3 = 'file3.json';
const filepath4 = 'file4.json';
const expectJson1 = readFile('expectJson1.txt');
const expectJson2 = readFile('expectJson2.txt');

test('test diff file1, file2', () => {
  expect(genDiff(filepath1, filepath2, { format: 'json' })).toBe(expectJson1);
});

test('test diff file3, file4', () => {
  expect(genDiff(filepath3, filepath4, { format: 'json' })).toBe(expectJson2);
});

test('test errore', () => {
  expect(genDiff(filepath3, filepath4, { format: 'jso' })).toBe('errore');
});