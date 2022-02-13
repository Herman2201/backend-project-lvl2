#!/usr/bin/env node

import genDiff from '../index.js';
import { program } from 'commander';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, type) => {
    const result = genDiff(filepath1, filepath2, type);
    console.log(result);
  })
  .parse(process.argv);
