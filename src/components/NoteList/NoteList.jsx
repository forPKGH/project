import React from "react";
import "../NoteList/noteList.css"
import Button from "../Button/Button"
import Header from "../Header/Header"

const NoteList = ({ notes }) => {
  function deleteNote() {
    const idToDelete = this.id;
  }

  function editNote() {
    const idToEdit = this.id;
  }

  return (<>
    <div className="note">
      <div className="container">
        <ul className="note-list">
          {notes.map((item) => {
            return (
              <li key={item.id} className="note-list__item">
                <div className="note-list__info">
                  <h2 className="note-list__title">{item.title}</h2>
                  <span className="note-list__date">{item.date}</span>
                </div>
                <div className="note-list__buttons">
                  <Button text="Удалить" icon="/icons/x.svg" variant="transparent" layout="icon-top-no-bg" onClick={deleteNote}></Button>
                  <Button text="Изменить" icon="/icons/pencil.svg" variant="transparent" layout="icon-top-no-bg" onClick={editNote}></Button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  </>
  )
}

export default NoteList;