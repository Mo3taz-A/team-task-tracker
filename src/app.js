const { sampleTasks, filterTasks, summarizeTasks, formatTasks } = require('./tasks');

function run(argv = process.argv.slice(2), write = console.log, writeError = console.error) {
  const [command = 'list', filter = 'all'] = argv;

  if (command === 'list') {
    try {
      write(`Showing ${filter} tasks`);
      write(formatTasks(filterTasks(sampleTasks, filter)));
      return 0;
    } catch (error) {
      writeError(error.message);
      return 1;
    }
  }

  if (command === 'summary') {
    const summary = summarizeTasks(sampleTasks);
    write(`Total tasks: ${summary.total}`);
    write(`Open tasks: ${summary.open}`);
    write(`Completed tasks: ${summary.completed}`);
    return 0;
  }

  writeError(`Unknown command: ${command}`);
  return 1;
}

if (require.main === module) {
  process.exitCode = run();
}

module.exports = {
  run
};
