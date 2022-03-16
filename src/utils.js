// @ts-check

import path from 'path';
import { readFileSync } from 'fs';

const readFile = (filename) => readFileSync(path.resolve(filename), 'utf-8');

const getExpected = (value) => {
  if (value.add) {
    return value.add;
  }
  if (value.del) {
    return value.del;
  }
  if (value.notChange) {
    return value.notChange;
  }
  throw new Error(`Invalid ${value} format file`);
};

export { readFile, getExpected };
