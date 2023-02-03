import { useEffect, useState } from 'react';

import { AppWrapper, NotesContainerWrapper, NotesContainerTitle } from "./components/NotesContainer/NotesContainerStyle"
import NoteCard from './components/NoteCard/NoteCard';

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes'))
    if (notesFromLocalStorage) {
      setNotes(notesFromLocalStorage)
    }
  }, [])


  return (
    <AppWrapper>
      <NotesContainerTitle>
        My Notes
      </NotesContainerTitle>
      <NotesContainerWrapper>
        <NoteCard isAddNewNote />
        {notes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
          />
        ))}
      </NotesContainerWrapper>
    </AppWrapper>
  );
}

export default App;
