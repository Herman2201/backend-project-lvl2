import { test, expect } from '@jest/globals';
import genDiff from '../index.js';
import { readFileSync } from 'fs';

const expectFile = readFileSync(process.cwd() + '/__fixtures__/' + 'expect.txt', 'utf8');

const filepath1 = 'file1.json';
const filepath2 = 'file2.json';

test('amogus', () => {
  expect(genDiff(filepath1, filepath2)).toBe(expectFile);
});
