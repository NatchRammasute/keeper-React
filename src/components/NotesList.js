import React from 'react'
import Note from './Note'
import AddNote from './AddNote'


function NotesList( { notes, addNote, deleteNote } ) {
    return (
        <div className="notes-list">
            {notes.map((note,index) => {
                console.log(note.id)
               return <Note
                        key={index} 
                        id={note.id}
                        text={note.text}
                        date={note.date}
                        deleteNote={deleteNote}
                        />
            })}
            <AddNote addNote={addNote} />
        </div>
    )
}

export default NotesList
