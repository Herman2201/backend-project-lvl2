import yaml from 'js-yaml';

const parsers = (dataFile, extname) => {
  switch (extname) {
    case 'json':
      return JSON.parse(dataFile);

    case 'yml':
    case 'yaml':
      return yaml.load(dataFile);

    default:
      throw new Error(`Invalid ${extname} format file`);
  }
};

export default parsers;
