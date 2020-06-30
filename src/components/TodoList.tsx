import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { todoListState } from '../recoil';
import { TodoItem } from './TodoItem';
import { TodoItemCreator } from './TodoItemCreator';
import { ITodo } from '../types';

export const TodoList: FC = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem: ITodo) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
