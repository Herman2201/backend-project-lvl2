// @ts-check

import path from 'path';
import { readFileSync } from 'fs';
import parsers from './parsers.js';
import diff from './diff.js';
import formatter from './formatters/index.js';

export const readFile = (filename) => readFileSync(path.resolve(filename), 'utf-8');
const getExtname = (file) => path.extname(file).slice(1);

const genDiff = (file1, file2, format = 'stylish') => {
  const dataFile1 = readFile(file1);
  const dataFile2 = readFile(file2);
  const extnameFile1 = getExtname(file1);
  const extnameFile2 = getExtname(file2);

  const parsingFile1 = parsers(dataFile1, extnameFile1);
  const parsingFile2 = parsers(dataFile2, extnameFile2);

  const diffFile = diff(parsingFile1, parsingFile2);
  return formatter(diffFile, format);
};

export default genDiff;
