import { writable } from 'svelte/store';
import type { TodoItem } from '../types/app';

export function createTodoStore(initialItems: Omit<TodoItem, 'id'>[]) {
  let uid = 1;

  const todos = initialItems.map(({ done, label }) => ({
    id: uid++,
    done,
    label
  })
  );

  const { subscribe, update } = writable<TodoItem[]>(todos);

  return {
    subscribe,
    add: (label: string) => {
      const todo = {
        id: uid++,
        done: false,
        label
      };

      update($todos => [...$todos, todo])
    },
    delete: (todo: TodoItem) => {
      update($todos => $todos.filter((t) => t !== todo));
    },
    mark: (todo: TodoItem, done: boolean) => {
      update($todos => [
        ...$todos.filter((t) => t !== todo),
        { ...todo, done }
      ]);
    }
  };
}


export type TodoStore = typeof createTodoStore;
