import { readFileSync } from 'fs';
import path from 'path';

const readTree = (tree) => {
  // const filePath = path.resolve(tree);
  return readFileSync(process.cwd() + '/__fixtures__/' + tree, 'utf8');
};

export { readTree };
