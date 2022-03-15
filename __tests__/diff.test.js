import path from 'path';
import { readFileSync } from 'fs';
import { test, expect } from '@jest/globals';
import genDiff from '../index.js';

const fileJson1 = 'file1.json';
const fileJson2 = 'file2.json';
const fileYaml1 = 'file1.yaml';
const fileYaml2 = 'file2.yaml';
const fileYml1 = 'file1.yml';
const fileYml2 = 'file2.yml';
const expectStylish = readFileSync(
  path.join(path.resolve(), '__fixtures__', 'expectStylish.txt'),
  'utf8',
);
const expectPlain = readFileSync(
  path.join(path.resolve(), '__fixtures__', 'expectPlain.txt'),
  'utf8',
);
const expectJSON = readFileSync(
  path.join(path.resolve(), '__fixtures__', 'expectJSON.txt'),
  'utf8',
);
const styleStylish = 'stylish';
const stylePlain = 'plain';
const styleJSON = 'json';

describe('Bad test', () => {
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
  test.each([
    {
      file1: fileJson1,
      file2: fileJson2,
      badFormat: 'stylih',
    },
    {
      file1: fileYaml1,
      file2: fileYaml2,
      badFormat: 'Plain',
    },
    {
      file1: fileYml1,
      file2: fileYml2,
      badFormat: 'jSon',
    },
  ])('error format: stulih, Plain, jSon', ({ file1, file2, badFormat }) => {
    expect(() => genDiff(file1, file2, badFormat)).toThrow();
  });
});
describe('diff test extname: json, yaml, yml. Format: stylish, plain, json', () => {
  test.each([
    { file1: fileJson1, file2: fileJson2, formatName: styleStylish },
    { file1: fileYaml1, file2: fileYaml2, formatName: styleStylish },
    { file1: fileYml1, file2: fileYml2, formatName: styleStylish },
  ])('Format stulihs', ({ file1, file2, formatName }) => {
    expect(genDiff(file1, file2, formatName)).toBe(expectStylish);
  });

  test.each([
    { file1: fileJson1, file2: fileJson2, formatName: stylePlain },
    { file1: fileYaml1, file2: fileYaml2, formatName: stylePlain },
    { file1: fileYml1, file2: fileYml2, formatName: stylePlain },
  ])('Format plain', ({ file1, file2, formatName }) => {
    expect(genDiff(file1, file2, formatName)).toBe(expectPlain);
  });
  test.each([
    { file1: fileJson1, file2: fileJson2, formatName: styleJSON },
    { file1: fileYaml1, file2: fileYaml2, formatName: styleJSON },
    { file1: fileYml1, file2: fileYml2, formatName: styleJSON },
  ])('Format json', ({ file1, file2, formatName }) => {
    expect(genDiff(file1, file2, formatName)).toBe(expectJSON);
  });
});
