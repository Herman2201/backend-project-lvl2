import formatStylish from './formatStylish.js';
import formatPlain from './formatPlain.js';

const getFormat = (format) => {
  switch (format) {
    case 'stylish':
      return formatStylish;
    case 'plain':
      return formatPlain;
    case 'json':
      return JSON.stringify;
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default getFormat;
