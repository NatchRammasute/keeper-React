import React, {useState} from 'react'

function AddNote({addNote}) {

    const [noteText, setNoteText] = useState('')
    const characterLimit = 200

    const updateNote = () => {
        if(noteText.trim().length > 0){
            addNote(noteText)
            setNoteText('')
        }
        
    }

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value)
        }
    }

    return (
        <div className="note new">
            <textarea onChange={handleChange} value={noteText} placeholder="Type to add note" cols="10" rows="8"></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button onClick={ updateNote} className="save">Save</button>
            </div>
        </div>
    )
}

export default AddNote
