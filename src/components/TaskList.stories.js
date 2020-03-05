
import React from 'react';

import TaskList from './TaskList';
import { taskData, actionsData } from './Task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: '1', title: 'Tâche 1' },
  { ...taskData, id: '2', title: 'Tâche 2' },
  { ...taskData, id: '3', title: 'Tâche 3' },
  { ...taskData, id: '4', title: 'Tâche 4' },
  { ...taskData, id: '5', title: 'Tâche 5' },
  { ...taskData, id: '6', title: 'Tâche 6' },
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Tâche 6 (épinglé)', state: 'TASK_PINNED' },
];

export const Default = () => <TaskList tasks={defaultTasksData} {...actionsData} />;

export const WithPinnedTasks = () => <TaskList tasks={withPinnedTasksData} {...actionsData} />;

export const Loading = () => <TaskList loading tasks={[]} {...actionsData} />;

export const Empty = () => <TaskList tasks={[]} {...actionsData} />;