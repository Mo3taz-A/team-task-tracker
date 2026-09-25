const test = require('node:test');
const assert = require('node:assert/strict');

const {
  sampleTasks,
  createTask,
  markTaskCompleted,
  filterTasks,
  summarizeTasks,
  formatTasks
} = require('../src/tasks');

test('createTask trims values and defaults missing assignee', () => {
  const task = createTask('  Learn pull requests  ', '   ', '2026-10-01');

  assert.equal(task.title, 'Learn pull requests');
  assert.equal(task.assignee, 'Unassigned');
  assert.equal(task.completed, false);
  assert.equal(task.dueDate, '2026-10-01');
});

test('createTask rejects an empty title', () => {
  assert.throws(() => createTask('   '), /Task title is required\./);
});

test('markTaskCompleted returns a copied completed task', () => {
  const original = sampleTasks[1];
  const updated = markTaskCompleted(original);

  assert.equal(original.completed, false);
  assert.equal(updated.completed, true);
  assert.ok(updated.completedAt);
});

test('filterTasks returns all tasks when using the all filter', () => {
  const result = filterTasks(sampleTasks, 'all');

  assert.equal(result.length, sampleTasks.length);
  assert.notEqual(result, sampleTasks);
});

test('filterTasks returns only open tasks for the open filter', () => {
  const result = filterTasks(sampleTasks, 'open');

  assert.deepEqual(
    result.map((task) => task.title),
    ['Set up project board', 'Write release notes draft']
  );
});

test('filterTasks rejects unsupported filters', () => {
  assert.throws(() => filterTasks(sampleTasks, 'completed'), /Unsupported filter: completed/);
});

test('summarizeTasks returns counts for open and completed tasks', () => {
  assert.deepEqual(summarizeTasks(sampleTasks), {
    total: 3,
    completed: 1,
    open: 2
  });
});

test('formatTasks handles empty task lists', () => {
  assert.equal(formatTasks([]), 'No tasks found.');
});

test('formatTasks shows checkbox state, title, assignee, and due date', () => {
  const output = formatTasks(sampleTasks.slice(0, 1));

  assert.match(output, /^\[x\] Review onboarding plan — Alex \(due 2026-09-20\)$/);
});
