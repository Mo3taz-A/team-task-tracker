const sampleTasks = [
  {
    id: 1,
    title: 'Review onboarding plan',
    assignee: 'Alex',
    completed: true,
    dueDate: '2026-09-20'
  },
  {
    id: 2,
    title: 'Set up project board',
    assignee: 'Jordan',
    completed: false,
    dueDate: '2026-09-28'
  },
  {
    id: 3,
    title: 'Write release notes draft',
    assignee: 'Sam',
    completed: false,
    dueDate: '2026-09-30'
  }
];

function createTask(title, assignee = 'Unassigned', dueDate = null) {
  const normalizedTitle = String(title ?? '').trim();

  if (!normalizedTitle) {
    throw new Error('Task title is required.');
  }

  return {
    id: Date.now(),
    title: normalizedTitle,
    assignee: String(assignee).trim() || 'Unassigned',
    completed: false,
    dueDate
  };
}

function markTaskCompleted(task) {
  return {
    ...task,
    completed: true,
    completedAt: task.completedAt ?? new Date().toISOString()
  };
}

function filterTasks(tasks, filter = 'all') {
  switch (filter) {
    case 'all':
      return [...tasks];
    case 'open':
      return tasks.filter((task) => task.completed === false);
    case 'completed':
      return tasks.filter((task) => task.completed === true);
    default:
      // Learner exercise: add `completed` support here for issue #12.
      throw new Error(`Unsupported filter: ${filter}`);
  }
}

function summarizeTasks(tasks) {
  const completedCount = tasks.filter((task) => task.completed).length;
  const openCount = tasks.length - completedCount;

  return {
    total: tasks.length,
    completed: completedCount,
    open: openCount
  };
}

function formatTasks(tasks) {
  if (tasks.length === 0) {
    return 'No tasks found.';
  }

  return tasks
    .map((task) => {
      const state = task.completed ? '[x]' : '[ ]';
      const dueDate = task.dueDate ? ` (due ${task.dueDate})` : '';
      return `${state} ${task.title} — ${task.assignee}${dueDate}`;
    })
    .join('\n');
}

module.exports = {
  sampleTasks,
  createTask,
  markTaskCompleted,
  filterTasks,
  summarizeTasks,
  formatTasks
};
