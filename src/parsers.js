import yaml from 'js-yaml';

const parsers = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);

    case 'yml':
    case 'yaml':
      return yaml.load(data);

    default:
      throw new Error(`Invalid ${format} format file`);
  }
};

export default parsers;
