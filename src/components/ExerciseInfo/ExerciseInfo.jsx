import React from "react";
import { Link } from "react-router-dom";

import "../ExerciseInfo/exerciseInfo.css";
import Button from "../Button/Button";

const ExerciseInfo = ({
  title,
  description,
  instructions,
  link
}
) => {
  return (
    <div className="exercise-description">
      <div className="container">
        <div className="exercise-description__inner">
          <h1 className="exercise-description__title">
            {title}
          </h1>
          <p className="exercise-description__description">
            {description}
          </p>
          <p className="exercise-description__instructions">
            {instructions}
          </p>
        </div>
        <Link to={link}>
          <Button text="Начать" variant='filled' layout='text-only' />
        </Link>
      </div>
    </div>
  )
}

export default ExerciseInfo;