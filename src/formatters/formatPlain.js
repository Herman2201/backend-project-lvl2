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
  const lines = (key, path = []) => key.filter((item) => item.type !== 'notChange')
    .map((node) => {
      switch (node.type) {
        case 'nested':
          return `${lines(node.children, [...path, node.parent])}`;

        case 'replacement': {
          const file1 = `Property '${createPath([
            ...path,
            node.key,
          ])}' was updated. From ${handlingValue(node.value1)}`;

          const file2 = `to ${handlingValue(node.value2)}`;
          return `${file1} ${file2}`;
        }
        case 'add':
          return `Property '${createPath([
            ...path,
            node.key,
          ])}' was added with value: ${handlingValue(node.value)}`;
        case 'delete':
          return `Property '${createPath([...path, node.key])}' was removed`;
        default:
          throw new Error(`Unknown this type '${node.type}'`);
      }
    })
    .join('\n');
  return lines(tree);
};

export default formatPlain;
