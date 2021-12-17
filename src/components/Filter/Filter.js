import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import s from './Filter.module.css';

// filter announcemets with text in input 'filter'

export const Filter = ({ onSubmitFilter }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    onSubmitFilter(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  const onChangeFilter = e => {
    setFilter(e.target.value);
  };
  return (
    <div className={s.wrapper}>
      <input
        onChange={onChangeFilter}
        type="text"
        placeholder="Choose here..."
        className={s.input}
      ></input>
    </div>
  );
};
