import { useState } from 'react';
import { nanoid } from 'nanoid';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
// today = dd + '/' + mm + '/' + yyyy;
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

  // const resetForm = () => {
  //     setTitle('');
  //     setDescription('');
  //     // setDate('');
  // }

  const handleSubmitForm = e => {
    e.preventDefault();
    addNewAnnouncement(newAnnouncement);
    console.log(newAnnouncement);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        style={{ display: 'block' }}
        onChange={onChangeTitle}
      />
      <textarea cols="30" rows="10" onChange={onChangeDescription}></textarea>
      <button disabled={isDisabled()}>Add</button>
    </form>
  );
};
