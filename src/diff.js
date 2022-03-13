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
        del: '-',
        add: '+',
        key,
        value1: value[0],
        value2: value[1],
      };
    case 'notChange':
      return {
        notChange: ' ',
        key,
        value,
      };
    default:
      throw new Error(`Invalid this exist ${exist}`);
  }
};

const diff = (tree1, tree2) => {
  const keys = _.union(_.keys(tree1), _.keys(tree2));
  const sortKey = keys.sort();
  const diffKey = sortKey.map((key) => {
    if (!_.has(tree1, key)) {
      return formationsDiff(tree2[key], 'add', key);
    }
    if (!_.has(tree2, key)) {
      return formationsDiff(tree1[key], 'delete', key);
    }
    if (_.isObject(tree1[key]) && _.isObject(tree2[key])) {
      return {
        parent: key,
        children: diff(tree1[key], tree2[key]),
      };
    }
    if (!_.isEqual(tree1[key], tree2[key])) {
      return formationsDiff([tree1[key], tree2[key]], 'change', key);
    }
    return formationsDiff(tree1[key], 'notChange', key);
  });
  return diffKey;
};

export default diff;
