import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../recoil';

export const TodoListFilters: FC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value='Show All'>All</option>
        <option value='Show Completed'>Completed</option>
        <option value='Show Uncompleted'>Uncompleted</option>
      </select>
    </>
  );
};
