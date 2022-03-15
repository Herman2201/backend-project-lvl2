import formatStylish from './formatStylish.js';
import formatPlain from './formatPlain.js';
import formatJSON from './formatJSON.js';

const getFormat = (format) => {
  switch (format) {
    case 'stylish':
      return formatStylish;
    case 'plain':
      return formatPlain;
    case 'json':
      return formatJSON;
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default getFormat;
