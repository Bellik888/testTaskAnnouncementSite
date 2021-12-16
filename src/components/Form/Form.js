import { useState } from 'react';
import { nanoid } from 'nanoid';
import { BsPlusCircleFill } from 'react-icons/bs';

import s from './Form.module.css';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let todayDate = `${dd}.${mm}.${yyyy}`;

export const Form = ({ addNewAnnouncement }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [date, setDate] = useState('');
  // const [id, setId] = useState(null);

  let newAnnouncement = {
    title,
    description,
    date: todayDate,
    id: nanoid(),
  };

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };
  const onChangeDescription = e => {
    setDescription(e.target.value);
  };

  const isDisabled = () => {
    if (title !== '' && description !== '') {
      return false;
    }
    return true;
  };
  const handleSubmitForm = e => {
    e.preventDefault();
    addNewAnnouncement(newAnnouncement);
    console.log(newAnnouncement);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={s.form}>
      <input
        type="text"
        onChange={onChangeTitle}
        placeholder="Title..."
        className={s.input}
      />
      <textarea
        onChange={onChangeDescription}
        placeholder="Enter your announcement here..."
        className={s.text}
      ></textarea>
      <button disabled={isDisabled()} className={s.btn}>
        <BsPlusCircleFill className={s.icon} />
      </button>
    </form>
  );
};
// BsPlusCircleFill
