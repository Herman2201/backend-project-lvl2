// @ts-check

import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(path.resolve(__dirname, '..', '__fixtures__'), filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

export default readFile;
