import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const NOTESURL = 'http://localhost:3000/notes'

  const [notes, setNotes] = useState([])
  const [noteDetails, setNoteDetails] = useState(null)
  const [editMode, setEditMode] = useState(null)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('sorting off')

  useEffect(() => {
    fetch(NOTESURL)
    .then(r => r.json())
    .then(notes => setNotes(notes))
  },[])

  function handleSetNoteDetails(note) {
    setNoteDetails(note)
    setEditMode(false)
  }

  function handleUpdateNote(updatedNote, noteDetails) {
    console.log(updatedNote)
    setNotes(notes => {
      debugger
      return notes.map(note => {
        if (note.title === updatedNote.title || note.body === updatedNote.body) {
          return updatedNote
        } else {
          return note
        }
      })
    })
    setNoteDetails(updatedNote)
    fetch(`${NOTESURL}/${updatedNote.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedNote)
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }

  const displayNotes = notes.filter(note => {
    if (!search) return true
    return note.title.toLowerCase().includes(search.toLowerCase())
    || note.body.toLowerCase().includes(search.toLowerCase())
  }).sort((a, b) => {
    
    if (sort === 'sorting off') {
      return true
    } else if ( sort === 'sort title a-z') {
        const titleA = a.title.toUpperCase(); 
        const titleB = b.title.toUpperCase(); 
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
      

        return 0;
    } else {
        const titleA = a.title.toUpperCase(); 
        const titleB = b.title.toUpperCase(); 
        if (titleB < titleA) {
          return -1;
        }
        if (titleB > titleA) {
          return 1;
        }
      
        return 0;
    }
  })

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="container">
        <Sidebar notes={displayNotes} handleSetNoteDetails={handleSetNoteDetails} NOTESURL={NOTESURL} setNotes={setNotes} setSort={setSort} />
        <Content noteDetails={noteDetails} editMode={editMode} setEditMode={setEditMode} handleUpdateNote={handleUpdateNote} />
      </div>
    </>
  );
}

export default NoteContainer;