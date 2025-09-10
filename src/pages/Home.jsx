import React from "react";

import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Appointment from "../components/Appointment/Appointment";
import MoodDiary from "../components/MoodDiary/MoodDiary";
import DiariesMenu from "../components/DiariesMenu/DiariesMenu";

const Home = () => {
  return (<>
    <Header />
    <Appointment />
    <MoodDiary />
    <DiariesMenu />
  </>
  )
}

export default Home;