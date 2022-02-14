import yaml from 'js-yaml';
import { readFileSync } from 'fs';

const a = () => {
  const doc = yaml.load(readFileSync('./__fixtures__/file1.yaml', 'utf8'));
  console.log(doc);
};

a();
