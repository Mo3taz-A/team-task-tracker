const test = require('node:test');
const assert = require('node:assert/strict');

const { run } = require('../src/app');

test('run lists all tasks by default', () => {
  const output = [];
  const errors = [];

  const exitCode = run([], (line) => output.push(line), (line) => errors.push(line));

  assert.equal(exitCode, 0);
  assert.equal(errors.length, 0);
  assert.equal(output[0], 'Showing all tasks');
  assert.match(output[1], /\[x\] Review onboarding plan/);
});

test('run shows a summary when asked', () => {
  const output = [];

  const exitCode = run(['summary'], (line) => output.push(line), () => {});

  assert.equal(exitCode, 0);
  assert.deepEqual(output, ['Total tasks: 3', 'Open tasks: 2', 'Completed tasks: 1']);
});

test('run reports unsupported filters', () => {
  const errors = [];

  const exitCode = run(['list', 'completed'], () => {}, (line) => errors.push(line));

  assert.equal(exitCode, 1);
  assert.deepEqual(errors, ['Unsupported filter: completed']);
});

test('run reports an unknown command', () => {
  const errors = [];

  const exitCode = run(['deploy'], () => {}, (line) => errors.push(line));

  assert.equal(exitCode, 1);
  assert.deepEqual(errors, ['Unknown command: deploy']);
});
