#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --fomat <type>', 'output format')
  .parse(process.argv);
