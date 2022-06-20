// @ts-check

import path from 'path';
import parsers from './parsers.js';
import diff from './diff.js';
import formatter from './formatters/index.js';
import { readFile } from './utils.js';

const genDiff = (file1, file2, format = 'stylish') => {
  const dataFile1 = readFile(file1);
  const dataFile2 = readFile(file2);
  const extnameFile1 = path.extname(file1).slice(1);
  const extnameFile2 = path.extname(file2).slice(1);

  const parsingFile1 = parsers(dataFile1, extnameFile1);
  const parsingFile2 = parsers(dataFile2, extnameFile2);

  const diffFile = diff(parsingFile1, parsingFile2);
  return formatter(diffFile, format);
};

export default genDiff;
