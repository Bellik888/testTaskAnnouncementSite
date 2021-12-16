import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

import { Home } from './view/Home/Home';
import { Nav } from './view/Nav/Nav';
import { NewAnnouncement } from './view/NewAnnouncement/NewAnnouncement';
import { EditPage } from './view/EditPage/EditPage';
import { Details } from './view/Details/Details';

function App() {
  const [announcementList, setAnnouncementList] = useState(
    JSON.parse(window.localStorage.getItem('announcementList')) ?? [],
  );
  const [editorAnnouncement, setEditorAnnouncement] = useState(
    JSON.parse(window.localStorage.getItem('editorAnnouncement')) ?? null,
  );
  const history = useHistory();

  useEffect(() => {
    window.localStorage.setItem(
      'announcementList',
      JSON.stringify(announcementList),
    );
    window.localStorage.setItem(
      'editorAnnouncement',
      JSON.stringify(editorAnnouncement),
    );
  }, [announcementList, editorAnnouncement]);

  const addNewAnnouncement = newAnnouncement => {
    setAnnouncementList(prev => [newAnnouncement, ...prev]);
    history.push('/');
  };
  const deleteAnnouncement = id => {
    setAnnouncementList(announcementList.filter(el => el.id !== id));
  };
  const onEditAnnouncement = ({ title, description, id }) => {
    let ourAnnouncement = {
      title,
      description,
      id,
    };
    setEditorAnnouncement(ourAnnouncement);
    history.push('/edit');
  };

  const editedAnnouncement = obj => {
    let filteredAnn = announcementList.filter(el => el.id !== obj.id);
    setAnnouncementList([obj, ...filteredAnn]);
  };

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path="/new">
            <NewAnnouncement addNewAnnouncement={addNewAnnouncement} />
          </Route>
          <Route exact path="/">
            <Home
              announcementList={announcementList}
              deleteAnnouncement={deleteAnnouncement}
              onEditAnnouncement={onEditAnnouncement}
            />
          </Route>
          <Route exact path="/edit">
            <EditPage
              editorAnnouncement={editorAnnouncement}
              editedAnnouncement={editedAnnouncement}
            />
          </Route>
          <Route exact path="/announcement/:announcementId">
            <Details
              onEditAnnouncement={onEditAnnouncement}
              deleteAnnouncement={deleteAnnouncement}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
