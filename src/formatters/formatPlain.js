import _ from 'lodash';

const createPath = (path) => path.join('.');

const handlingValue = (val) => {
  if (_.isObject(val)) {
    return '[complex value]';
  }
  if (!_.isString(val)) {
    return `${val}`;
  }
  return `'${val}'`;
};

const formatPlain = (tree) => {
  const lines = (node, path = []) => node
    .filter((key) => !key.notChange)
    .map((key) => {
      switch (key.status) {
        case 'heir':
          return `${lines(key.children, [...path, key.parent])}`;

        case 'replacement': {
          const file1 = `Property '${createPath([
            ...path,
            key.key,
          ])}' was updated. From ${handlingValue(key.value1)}`;

          const file2 = `to ${handlingValue(key.value2)}`;
          return `${file1} ${file2}`;
        }
        case 'add':
          return `Property '${createPath([
            ...path,
            key.key,
          ])}' was added with value: ${handlingValue(key.value)}`;
        case 'delete':
          return `Property '${createPath([...path, key.key])}' was removed`;
        default:
          throw new Error(`Unknown this status '${key.status}'`);
      }
    })
    .join('\n');
  return lines(tree);
};

export default formatPlain;
