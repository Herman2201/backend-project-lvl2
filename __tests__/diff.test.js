import { test, expect } from '@jest/globals';
import genDiff from '../index.js';
import readFile from '../src/utils.js';

const fileJson1 = 'file1.json';
const fileJson2 = 'file2.json';
const fileJson3 = 'file3.jso';
const fileJson4 = 'file4.jso';
const fileYaml1 = 'file1.yaml';
const fileYaml2 = 'file2.yaml';
const fileYml1 = 'file1.yml';
const fileYml2 = 'file2.yml';
const expecti = readFile('expect.txt');

test('diff file1.json, file2.json', () => {
  expect(genDiff(fileJson1, fileJson2)).toBe(expecti);
});

test('diff file3.yaml, file4.yaml', () => {
  expect(genDiff(fileYaml1, fileYaml2)).toBe(expecti);
});

test('diff file1.yml, file1.yml', () => {
  expect(genDiff(fileYml1, fileYml2)).toBe(expecti);
});

test('test error', () => {
  expect(() => genDiff(fileJson3, fileJson4)).toThrow();
})
