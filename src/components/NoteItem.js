import React from "react";

function NoteItem({ note, handleSetNoteDetails }) {

  function handleShowNoteClick() {
    handleSetNoteDetails(note)
  }

  return (
    <li onClick={handleShowNoteClick}>
      <h2>{note.title}</h2>
      <p>{`${note.body.substring(0, 49)}...`}</p>
    </li>
  );
}

export default NoteItem;