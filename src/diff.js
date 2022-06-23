import _ from 'lodash';

const diff = (tree1, tree2) => {
  const keys = _.union(_.keys(tree1), _.keys(tree2));
  const sortKey = _.sortBy(keys);
  const diffKey = sortKey.map((key) => {
    if (!_.has(tree1, key)) {
      return {
        type: 'add',
        add: '+',
        key,
        value: tree2[key],
      };
    }
    if (!_.has(tree2, key)) {
      return {
        type: 'delete',
        key,
        value: tree1[key],
      };
    }
    if (_.isObject(tree1[key]) && _.isObject(tree2[key])) {
      return {
        type: 'nested',
        parent: key,
        children: diff(tree1[key], tree2[key]),
      };
    }
    if (!_.isEqual(tree1[key], tree2[key])) {
      return {
        type: 'replacement',
        key,
        value1: tree1[key],
        value2: tree2[key],
      };
    }
    return {
      type: 'notChange',
      key,
      value: tree1[key],
    };
  });
  return diffKey;
};

export default diff;
