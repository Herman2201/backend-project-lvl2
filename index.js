// @ts-check

import { readTree } from '../backend-project-lvl2/src/utils.js';
import _ from 'lodash';

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

const diff = (file1, file2) => {
  const keys = _.union(_.keys(file1), _.keys(file2));
  const sortKey = keys.sort();
  const diffKey = sortKey.map((key) => {
    if (!_.has(file1, key)) {
      return {
        exist: '+',
        key,
        value: file2[key],
      };
    }
    if (!_.has(file2, key)) {
      return {
        exist: '-',
        key,
        value: file1[key],
      };
    }
    if (!_.isEqual(file1[key], file2[key])) {
      return {
        exist: ['-', '+'],
        key,
        value: [file1[key], file2[key]],
      };
    }
    return {
      exist: '   ',
      key,
      value: file1[key],
    };
  });

  return diffKey;
};

const genDiff = (file1, file2, type) => {
  if (type){
    return 1;
  }
  const dataFile1 = JSON.parse(readTree(file1));
  const dataFile2 = JSON.parse(readTree(file2));
  const diffObj = diff(dataFile1, dataFile2);
  return jsonString(diffObj);
};

export default genDiff;
