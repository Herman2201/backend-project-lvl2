// @ts-check

import parseFileData from './src/parsers.js';
import diff from './src/diff.js';
import treeToString from './src/treeToString.js';


const genDiff = (file1, file2) => {
  const dataFile1 = parseFileData(file1);
  const dataFile2 = parseFileData(file2);
  return treeToString(diff(dataFile1, dataFile2));
};

export default genDiff;
