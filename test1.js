import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = () => path.join(__dirname, '__fixtures__/');
const absolutePath = (fileName) => path.join(getFixturePath(), fileName);
const pathFile = (route) => path.join(__dirname, route);
const doc = getFixturePath();
console.log(readFileSync(absolutePath('file1.json'), 'utf8'));
console.log(readFileSync(pathFile('__fixtures__/file1.json'), 'utf8'));
