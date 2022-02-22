import _ from 'lodash';

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
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return {
        parent: key,
        children: diff(file1[key], file2[key]),
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
      exist: ' ',
      key,
      value: file1[key],
    };
  });
  return diffKey;
};

export default diff;
