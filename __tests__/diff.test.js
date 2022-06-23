import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectStylish = readFileSync(
  path.join(path.resolve(), '__fixtures__', 'result_stylish.txt'),
  'utf8',
);
const expectPlain = readFileSync(
  path.join(path.resolve(), '__fixtures__', 'result_plain.txt'),
  'utf8',
);
const expectJSON = readFileSync(
  path.join(path.resolve(), '__fixtures__', 'result_json.txt'),
  'utf8',
);
const styleStylish = 'stylish';
const stylePlain = 'plain';
const styleJSON = 'json';

test.each([
  {
    badExtname1: 'file1.jso',
    badExtname2: 'file2.json',
  },
  {
    badExtname1: 'file1.yam',
    badExtname2: 'file2.yaml',
  },
  {
    badExtname1: 'file1.ym',
    badExtname2: 'file2.yml',
  },
  {
    badExtname1: 'file1',
    badExtname2: 'file2.yml',
  },
])('error extname', ({ badExtname1, badExtname2 }) => {
  expect(() => genDiff(badExtname1, badExtname2)).toThrow();
});
test('error format', () => {
  expect(() => genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'stylih')).toThrow();
});
test.each([
  {
    file1: getFixturePath('file1.json'),
    file2: '__fixtures__/file2.json',
    formatName: styleStylish,
    expected: expectStylish,
  },
  {
    file1: getFixturePath('file1.yaml'),
    file2: '__fixtures__/file2.yaml',
    formatName: stylePlain,
    expected: expectPlain,
  },
  // {
  //   file1: getFixturePath('file1.yml'),
  //   file2: '__fixtures__/file2.yml',
  //   formatName: styleJSON,
  //   expected: expectJSON,
  // },
])('diff files', ({
  file1, file2, formatName, expected,
}) => {
  expect(genDiff(file1, file2, formatName)).toBe(expected);
});
