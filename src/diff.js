import _ from 'lodash';

const formationsDiff = (value, exist, key) => {
  switch (exist) {
    case 'add':
      return {
        add: '+',
        key,
        value,
      };
    case 'delete':
      return {
        del: '-',
        key,
        value,
      };
    case 'change':
      return {
        changeDel: '-',
        changeAdd: '+',
        key,
        valueFile1: value[0],
        valueFile2: value[1],
      };
    case 'notChange':
      return {
        notChange: ' ',
        key,
        value,
      };
    // default:
    //   throw new Error(`Invalid this exist ${exist}`);
  }
};

const diff = (file1, file2) => {
  const keys = _.union(_.keys(file1), _.keys(file2));
  const sortKey = keys.sort();
  const diffKey = sortKey.map((key) => {
    if (!_.has(file1, key)) {
      return formationsDiff(file2[key], 'add', key);
    }
    if (!_.has(file2, key)) {
      return formationsDiff(file1[key], 'delete', key);
    }
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return {
        parent: key,
        children: diff(file1[key], file2[key]),
      };
    }
    if (!_.isEqual(file1[key], file2[key])) {
      return formationsDiff([file1[key], file2[key]], 'change', key);
    }
    return formationsDiff(file1[key], 'notChange', key);
  });
  console.log(diffKey);
  return diffKey;
};

export default diff;
