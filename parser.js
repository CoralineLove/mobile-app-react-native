const fs = require('fs');
const path = require('path');

const FILE_PATHS = {
  input: 'input.txt',
  rules: 'rules.txt',
  output: 'output.txt',
};

function readInput(filePath) {
  return fs.readFileSync(filePath, 'utf8').trim().split('\n');
}

function parseRules(rulesData) {
  return rulesData.map((rule) => rule.split(' -> '));
}

function parseOutput(filePath) {
  return fs.readFileSync(filePath, 'utf8').trim();
}

function main() {
  const input = readInput(FILE_PATHS.input);
  const rules = parseRules(readInput(FILE_PATHS.rules));
  const output = parseOutput(FILE_PATHS.output);

  // your logic here
}

main();