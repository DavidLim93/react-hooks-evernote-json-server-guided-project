import React from "react";

function NoteViewer({ noteDetails, setEditMode }) {

  const { title, body } = noteDetails

  function handleSetEditModeClick() {
    setEditMode(editMode => !editMode)
  }

  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleSetEditModeClick}>Edit</button>
    </>
  );
}

export default NoteViewer;