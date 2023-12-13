import React from "react";
import Editor from "../components/Editor";
import Sidebar from "../components/Sidebar";
import { nanoid } from "nanoid";


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
//finc current note

function findCurrentNote(){
  return notes.find(note => note.id === currentNoteId)
  || notes[0]
}

  return (
    <h1>Hello World</h1>
  )
}