import React, { useState } from 'react';

const tasks = [
  { id: 1, title: 'Zadanie 1 - Przygotować prezentację', completed: true },
  { id: 2, title: 'Zadanie 2 - Napisać raport', completed: false },
  { id: 3, title: 'Zadanie 3 - Ukończyć laboratorium React', completed: true },
  { id: 4, title: 'Zadanie 4 - Przeczytać dokumentację', completed: false },
  { id: 5, title: 'Zadanie 5 - Zrobić commit na GitHub', completed: true },
  { id: 6, title: 'Zadanie 6 - Przetestować aplikację', completed: false },
  { id: 7, title: 'Zadanie 7 - Zbudować wersję produkcyjną', completed: false },
];

function TaskList() {
  const [filter, setFilter] = useState('all');
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return filter === 'completed' ? task.completed : !task.completed;
  });
  
  return (
    <div>
      <select onChange={e => setFilter(e.target.value)}>
        <option value="all">Wszystkie</option>
        <option value="completed">Ukończone</option>
        <option value="incomplete">Nieukończone</option>
      </select>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
