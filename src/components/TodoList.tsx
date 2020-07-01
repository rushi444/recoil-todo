import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { filteredTodoListState } from '../recoil';
import { TodoItem } from './TodoItem';
import { TodoItemCreator } from './TodoItemCreator';
import { ITodo } from '../types';
import { TodoListFilters } from './TodoListFilters';
import { TodoListStats } from './TodoListStats';

export const TodoList: FC = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem: ITodo) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
