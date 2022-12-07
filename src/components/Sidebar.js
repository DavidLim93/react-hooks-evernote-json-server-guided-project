import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, handleSetNoteDetails, NOTESURL, setNotes, setSort }) {

  function handleAddNewOnClick() {

    const defaultNote = {
      title: 'default',
      body: 'placeholder',
      userId: 1
    }
    
    fetch(NOTESURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(defaultNote)
    })
    .then(r => r.json())
    .then(newNote => {
      setNotes([...notes, newNote])
    })
  }

  function handleSortOnChange(e) {
    setSort(e.target.value)
  }

  return (
    <div className="master-detail-element sidebar">
      <select className="sort" onChange={handleSortOnChange}>
        <option value='sorting off'>Sorting Off</option>
        <option value='sort title a-z'>Sort Title A-Z</option>
        <option value='sort title z-a'>Sort Title Z-A</option>
      </select>
      <NoteList notes={notes} handleSetNoteDetails={handleSetNoteDetails} />
      <button onClick={handleAddNewOnClick}>New</button>
    </div>
  );
}

export default Sidebar;