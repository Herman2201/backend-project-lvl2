import { readFile } from './utils.js';
import yaml from 'js-yaml';
import path from 'path';

const parseFileData = (file) => {
  const typeFile = path.extname(file);
  switch (typeFile) {
    case '.json':
      return JSON.parse(readFile(file));

    case '.yml':
    case '.yaml':
      return yaml.load(readFile(file));

    default:
      throw new Error(`Invalid ${typeFile} format file`);
  }
};

export default parseFileData;
