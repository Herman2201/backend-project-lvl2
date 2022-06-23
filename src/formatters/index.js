import formatStylish from './formatStylish.js';
import formatPlain from './formatPlain.js';
export const exchange = {
  add: '+',
  delete: '-',
  notChange: ' ',
};

const formatter = (data, format) => {
  switch (format) {
    case 'stylish':
      return formatStylish(data);
    case 'plain':
      return formatPlain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default formatter;
