// @ts-check

import parsers from './parsers.js';
import diff from './diff.js';
import getFormat from './formatters/index.js';
import { readFile } from './utils.js';
import path from 'path';

const genDiff = (file1, file2, format) => {
  const dataFile1 = readFile(file1);
  const dataFile2 = readFile(file2);
  const extnameFile1 = path.extname(file1).slice(1);
  const extnameFile2 = path.extname(file2).slice(1);

  const parsingFile1 = parsers(dataFile1, extnameFile1);
  const parsingFile2 = parsers(dataFile2, extnameFile2);

  const diffFile = diff(parsingFile1, parsingFile2);
  const result = getFormat(format);
  return result(diffFile);
};

export default genDiff;
