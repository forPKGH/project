import React, { useState, useEffect } from "react";

import Button from "../../components/Button/Button";

import "../Fftto/Fftto.css"

const Fftto = () => {
  const exercises = [
    { image: "/icons/eye.svg", count: 5, description: "Назовите 5 объектов, которые видите" },
    { image: "/icons/ear.svg", count: 4, description: "Прислушайтесь к 4 разным звукам" },
    { image: "/icons/touch.svg", count: 3, description: "Потрогайте 3 предмета вокруг" },
    { image: "/icons/nose.svg", count: 2, description: "Уловите 2 различных запаха" },
    { image: "/icons/lips.svg", count: 1, description: "Вспомните вкус вашего любимого блюда" }
  ];

  const [currentExerciseIndex, setCurrentExercise] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeButtons, setActiveButtons] = useState(0);

  const currentExercise = exercises[currentExerciseIndex];

  useEffect(() => {
    setIsCompleted(currentExerciseIndex >= exercises.length);
  }, [currentExerciseIndex, exercises.length]);

  useEffect(() => {
    if (!currentExercise) return;

    if (activeButtons >= currentExercise.count) {
      const timer = setTimeout(() => {
        setActiveButtons([]);
        setCurrentExercise(prev => prev + 1);
        setActiveButtons(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [activeButtons, currentExercise]);


  const handleCounterClick = () => {
    setActiveButtons(prev => prev + 1);
  };

  const displayButtons = () => {
    if (!currentExercise) return [];

    const buttons = [];
    for (let i = 0; i < currentExercise.count; i++) {
      buttons.push(<Button key={i} text={i + 1} layout="text-only" className={`exercise__button ${activeButtons > i ? 'button--active' : ''}`} />)
    }
    return buttons;
  }

  const displayExercise = () => {
    if (!currentExercise) return;
    return (<>
      <div className="exercise__description">{currentExercise.description}</div>
      <div className="exercise__container">
        <img className="exercise__image" src={currentExercise.image} />
      </div>
      <div className="exercise__buttons" onClick={handleCounterClick}>
        {displayButtons()}
      </div>
    </>)
  }

  const restartCycle = () => {
    setCurrentExercise(0);
    setIsCompleted(false);
    setActiveButtons(0);
  }

  if (isCompleted) {
    return (
      <div className="breathing">
        <div className="container">
          <div className="breathing__inner">
            <span className="breathing__end-text">Так держать!</span>
            <div className="breathing__end-image"><img src="/icons/point.svg" alt="" /></div>
            <div className="breathing__buttons">
              <Button text="Ещё раз" variant="filled" layout="text-only" onClick={restartCycle}></Button>
              <Button text="На главную" variant="filled" layout="text-only" onClick={() => window.location.href = '/'}></Button>
            </div>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className="exercise">
      <div className="container">
        <div className="exercise__inner">
          {displayExercise()}
        </div>
      </div>
    </div>
  )
}

export default Fftto;