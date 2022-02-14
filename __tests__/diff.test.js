import { test, expect } from '@jest/globals';
import genDiff from '../index.js';
import readFile from '../src/utils.js';

const fileJson1 = 'file1.json';
const fileJson2 = 'file2.json';
const fileJson3 = 'file3.json';
const fileJson4 = 'file4.json';
const fileYaml1 = 'file1.yaml';
const fileYaml2 = 'file2.yaml';
const expectJson1 = readFile('expectJson1.txt');
const expectJson2 = readFile('expectJson2.txt');

test('diff file1.json, file2.json', () => {
  expect(genDiff(fileJson1, fileJson2)).toBe(expectJson1);
});

test('diff file3.json, file4.json', () => {
  expect(genDiff(fileJson3, fileJson4)).toBe(expectJson2);
});

test('diff file3.yaml, file4.yaml', () => {
  expect(genDiff(fileYaml1, fileYaml2)).toBe(expectJson1);
});
