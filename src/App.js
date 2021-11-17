import NotesList from './components/NotesList'
import React, {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import Search from './components/Search'
import Header from './components/Header'


function App() {

  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'Example text note',
    date: "15-04-2019"
    }
])

  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if(savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  
  }, [notes])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleTimeString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter( (note)=> note.id !== id)
    console.log(id)
    setNotes(newNotes)
  }

  return (
    <div className= {`${darkMode && 'dark-mode'}`}>
      <div className="container">
          <Header setDarkMode={setDarkMode} />
          <Search setSearchText={setSearchText} />
          <NotesList notes= { notes.filter( note => note.text.toLocaleLowerCase().includes(searchText)) } addNote={addNote} deleteNote={deleteNote} />
      </div>
    </div>
  
  );
}

export default App;
