// @ts-check

import parseFileData from './src/parsers.js';
import diff from './src/diff.js';
import getFormat from './src/formatters/index.js';

const genDiff = (file1, file2, format) => {
  const dataFile1 = parseFileData(file1);
  const dataFile2 = parseFileData(file2);
  const diffFile = diff(dataFile1, dataFile2);
  const result = getFormat(format);
  return result(diffFile);
};

export default genDiff;
