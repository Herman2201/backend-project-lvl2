import _ from 'lodash';
import { getExpected } from './utils.js';

const getChildren = (children, depth = 0) => {
  const space = ' ';
  const indentSize = depth * 4;
  const childrentIndent = space.repeat(indentSize + 4);
  const bracketIndent = space.repeat(indentSize);

  if (!_.isObject(children)) {
    return `${children}`;
  }
  const keys = _.union(_.keys(children));
  const sortKey = keys.sort();
  const result = sortKey.map((value) =>
    !_.isObject(children[value])
      ? `${childrentIndent}${value}: ${children[value]}`
      : `${childrentIndent}${value}: ${getChildren(children[value], depth + 1)}`
  );
  return ['{', ...result, `${bracketIndent}}`].join('\n');
};

const treeToString = (obj) => {
  const iter = (currentValue, depth = 0) => {
    const space = ' ';
    const indentSize = depth * 4;
    const currentIndent = space.repeat(indentSize);
    const childrentIndent = space.repeat(indentSize - 2);
    const bracketIndent = space.repeat(indentSize - 4);

    const lines = currentValue.map((key) => {
      if (Object.prototype.hasOwnProperty.call(key, 'children')) {
        return `${currentIndent}${key.parent}: ${iter(
          key.children,
          depth + 1
        )}`;
      }
      if (key.changeDel && key.changeAdd) {
        return `${childrentIndent}${key.changeDel} ${key.key}: ${getChildren(
          key.valueFile1,
          depth
        )}\n${childrentIndent}${key.changeAdd} ${key.key}: ${getChildren(
          key.valueFile2,
          depth
        )}`;
      }
      return `${childrentIndent}${getExpected(key)} ${key.key}: ${getChildren(
        key.value,
        depth
      )}`;
    });

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(obj, 1);
};

export default treeToString;
