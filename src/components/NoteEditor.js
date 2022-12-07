import React, { useState } from "react";

function NoteEditor({ noteDetails, setEditMode, handleUpdateNote }) {


  const { title, body } = noteDetails

  const [formData, setFormData] = useState({
    title: title,
    body: body
  })

  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const updatedNote = {
      ...noteDetails,
      title: formData.title,
      body: formData.body
    }
    handleUpdateNote(updatedNote)
    setEditMode(false)
  }

  function handleCancelOnClick() {
    setEditMode(false)
  }

  return (
    <form className="note-editor" onSubmit={handleOnSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleOnChange} />
      <textarea name="body" value={formData.body} onChange={handleOnChange} />
 
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={handleCancelOnClick}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;