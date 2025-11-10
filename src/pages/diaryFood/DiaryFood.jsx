import React from "react";

import NoteList from "../../components/NoteList/NoteList";
const DiaryFood = () => {
  const noteList = [
    {
      id: 1,
      title: "Дорогой дневник мне не описать ту боль и унижение что я испытал сегодня",
      date: "18.03.2025",
    },
    {
      id: 2,
      title: "Дневник мне не описать ту боль и унижение что я испытал сегодня",
      date: "19.03.2025",
    },
    {
      id: 3,
      title: "Дневник мне не описать ту боль и унижение что я испытал сегодня",
      date: "19.03.2025",
    }
  ];
  return (
    <NoteList notes={noteList} />
  )
}

export default DiaryFood;