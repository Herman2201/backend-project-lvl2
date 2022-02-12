import { test, expect } from '@jest/globals';
import genDiff from '../index.js';
import readFile from '../src/utils.js';

const filepath1 = 'file1.json';
const filepath2 = 'file2.json';
const expectJson = readFile('expectJson.txt');

test('amogus', () => {
  expect(genDiff(filepath1, filepath2)).toBe(expectJson);
});
