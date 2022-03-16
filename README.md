### Hexlet tests and linter status:

[![Actions Status](https://github.com/Herman2201/backend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Herman2201/backend-project-lvl2/actions)
[![test](https://github.com/Herman2201/backend-project-lvl2/actions/workflows/test-chek.yml/badge.svg)](https://github.com/Herman2201/backend-project-lvl2/actions/workflows/test-chek.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/e75e9f1522a7ec37ec6c/maintainability)](https://codeclimate.com/github/Herman2201/backend-project-lvl2/maintainability)
<a href="https://codeclimate.com/github/Herman2201/backend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/e75e9f1522a7ec37ec6c/test_coverage" /></a>

### <center>Difference Calculator</center>

Cli-utility that can reflect changes between two trees (any nesting).

 **The cli supports OS:**

- Windows;
- Linux;
- MacOS.

## Features

- Сalculating differences between trees
- Work with a prominent and complete path
- Сonvenient management
- Easy to use
- Works with any nesting

## Tech

Technologies that have been used

- Node.js - to work with various libraries!

## Installation

Utility requires [Node.js](https://nodejs.org/) v14+ to run.

Сlone the repository.
```
> cd Desktop
> git clone https://github.com/Herman2201/backend-project-lvl2
```

Install the dependencies.

```sh
cd Desktop/backend-project-lvl2
make install
```

To run from the terminal.

```sh
make publish
make link
```
### <center>Start work</center>

To understand how the program works, you need to enter the command < gendiff -h > in the console, which will show the data set and instructions.

```
> gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version        output the version number
  -f, --format <type>  output format [stylish, plain, json] (default:"stylish")
  -h, --help           display help for command
```

### <center>Demonstration work</center>
[![asciicast](https://asciinema.org/a/oygeUQdL8Z9HSAGvUPBLC4aZE.svg)](https://asciinema.org/a/oygeUQdL8Z9HSAGvUPBLC4aZE)