// @ts-check

import parseFileData from './src/parsers.js';
import diff from './src/diff.js';

const jsonString = (obj) => {
  const a = obj.map((key) => {
    if (Array.isArray(key.exist)) {
      return `  ${key.exist[0]} ${key.key}: ${key.value[0]} \n  ${key.exist[1]} ${key.key}: ${key.value[1]}`;
    }
    if (key.exist === '-') {
      return `  ${key.exist} ${key.key}: ${key.value}`;
    }
    if (key.exist === '+') {
      return `  ${key.exist} ${key.key}: ${key.value}`;
    }
    return `${key.exist} ${key.key}: ${key.value}`;
  });
  return `{ \n${a.join('\n')} \n}`;
};

const genDiff = (file1, file2) => {
  const dataFile1 = parseFileData(file1);
  const dataFile2 = parseFileData(file2);
  return jsonString(diff(dataFile1, dataFile2));
};

export default genDiff;
