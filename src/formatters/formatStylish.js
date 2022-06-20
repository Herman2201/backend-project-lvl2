import _ from 'lodash';
import { getExpected } from '../utils.js';

const getIndentSize = (depth, node = 'parent') => {
  const space = ' ';
  const indentSize = depth * 4;
  if (node === 'parent') {
    return [
      space.repeat(indentSize),
      space.repeat(indentSize - 2),
      space.repeat(indentSize - 4),
    ];
  }
  return [space.repeat(indentSize + 4), space.repeat(indentSize)];
};

const getChildren = (children, depth = 0) => {
  if (!_.isObject(children)) {
    return `${children}`;
  }
  const [childrentIndent, bracketIndent] = getIndentSize(depth, 'children');
  const keys = _.union(_.keys(children));
  const sortKey = _.sort(keys);
  const line = sortKey.map((value) => !_.isObject(children[value])
    ? `${childrentIndent}${value}: ${children[value]}`
    : `${childrentIndent}${value}: ${getChildren(children[value], depth + 1)}`);
  return ['{', ...line, `${bracketIndent}}`].join('\n');
};

const formatStylish = (obj) => {
  const iter = (currentValue, depth = 0) => {
    const [currentIndent, childrentIndent, bracketIndent] = getIndentSize(depth);
    const line = currentValue.map((key) => {
      switch (key.type) {
        case 'heir': {
          return `${currentIndent}${key.parent}: ${iter(
            key.children,
            depth + 1,
          )}`;
        }
        case 'replacement': {
          return `${childrentIndent}${key.del} ${key.key}: ${getChildren(
            key.value1,
            depth,
          )}\n${childrentIndent}${key.add} ${key.key}: ${getChildren(
            key.value2,
            depth,
          )}`;
        }
        case 'notChange':
        case 'add':
        case 'delete':
          return `${childrentIndent}${getExpected(key)} ${
            key.key
          }: ${getChildren(key.value, depth)}`;
        default:
          throw new Error(`Unknown this type '${key.type}'`);
      }
    });
    return ['{', ...line, `${bracketIndent}}`].join('\n');
  };

  return iter(obj, 1);
};

export default formatStylish;
