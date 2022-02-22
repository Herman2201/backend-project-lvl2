import _ from 'lodash';

const getChildren = (children) => {
  console.log(children);
  const keys = _.union(_.keys(children));
  const sortKey = keys.sort();
  // console.log(sortKey);
  const result = sortKey.map((value) => {
    // console.log(children[value]);
    return !_.isObject(children[value])
      ? ` ${value}: ${children[value]}`
      : getChildren(children[value]);
  });
  console.log(result);
  return keys;
};

const treeToString = (obj) => {
  const iter = (currentValue, depth) => {
    const space = ' ';
    const indentSize = depth * 4;
    const currentIndent = space.repeat(indentSize);
    const childrentIndent = space.repeat(indentSize - 2);
    const bracketIndent = space.repeat(indentSize - 4);
    const lines = currentValue.map((key) => {
      if (key.hasOwnProperty('children')) {
        // console.log(key.children);
        return `${currentIndent}${key.parent} ${iter(key.children, depth + 1)}`;
      }
      if (Array.isArray(key.exist)) {
        return `${childrentIndent}${key.exist[0]} ${key.key}: ${key.value[0]} \n${childrentIndent}${key.exist[1]} ${key.key}: ${key.value[1]}`;
      }
      if (key.exist === '-') {
        return !_.isObject(key.value)
          ? `${childrentIndent}${key.exist} ${key.key}: ${key.value}`
          : `${childrentIndent}${key.exist} ${key.key}: {\n${getChildren(
              key.value
            )}}`;
      }
      if (key.exist === '+') {
        return !_.isObject(key.value)
          ? `${childrentIndent}${key.exist} ${key.key}: ${key.value}`
          : `${childrentIndent}${key.exist} ${
              key.key
            }: {\n${childrentIndent}${getChildren(
              key.value
            )}\n${bracketIndent}}`;
      }
      return !_.isObject(key.value)
        ? `${childrentIndent}${key.exist} ${key.key}: ${key.value}`
        : `${childrentIndent}${key.exist} ${key.key}: ${getChildren(
            key.value
          )}`;
    });

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(obj, 1);
};

export default treeToString;
