import React from "react";
import Editor from "../components/Editor";
import Sidebar from "../components/Sidebar";
import { nanoid } from "nanoid";
import Split from 'react-split'


export default function App(){

  const [notes, setNotes] = React.useState([])
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ''
  )

  //create a new note

  function createNote(){
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNote => [newNote, ...prevNote])
    setCurrentNoteId(newNote.id)
  }

  ///update the note

  function updateNote(text){
    setNotes(oldNote = 
        oldNote.id === currentNoteId
        ? {...oldNote, body: 'write'}
        : oldNote
      )
  }
//find current note

function findCurrentNote(){
  return notes.find(note => note.id === currentNoteId)
  || notes[0]
}

  return (
    <main>
      {
        
        notes.length > 0 ?(
          <Split
            sizes={[30,70]}
            direction="horizontal"
            className="split"
          >
              <Sidebar 
                notes={notes}
                currentNote={findCurrentNote}
                setCurrentNoteId={setCurrentNoteId}
                newNote={createNote}
              />
              {
                currentNoteId && notes.length > 0 &&
                  <Editor 
                      currentNote={findCurrentNote}
                      updateNote={updateNote}
                  />
              }
          </Split>
        ) : (
          <div className="no-notes">
            <h1>You have no notes </h1>
            <button
            onClick={createNote}
            className="first-note"
            >
              Create Note
            </button>
          </div>
        )
      
      }
    </main>
  )
}