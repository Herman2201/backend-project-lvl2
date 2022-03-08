// @ts-check

import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

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
