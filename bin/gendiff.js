#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option(
    '-f, --format <type>',
    'output format [stylish, plain, json]',
    'stylish',
  )
  .action((filepath1, filepath2, formatName) => {
    const diff = genDiff(filepath1, filepath2, formatName.format);
    console.log(diff);
  })
  .parse(process.argv);
