import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, handleSetNoteDetails }) {
  return (
    <ul>
      {notes.map(note => {
        return <NoteItem key={note.id} note={note} handleSetNoteDetails={handleSetNoteDetails} />
      })}
    </ul>
  );
}

export default NoteList;