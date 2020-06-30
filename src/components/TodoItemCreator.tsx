import React, { useState, FC } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil';
import { getId } from '../utils';

export const TodoItemCreator: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((todoList) => [
      ...todoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

