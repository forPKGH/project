import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Timer from "../../components/Timer/Timer";
import Button from "../../components/Button/Button";
import Navigation from "../../components/Navigation/Navigation"

import "../Ffff/ffff.css"

const Ffff = () => {
  const [showContent, setShowContent] = useState(false);
  const [cycleCount, setCycleCount] = useState(1);
  const [actionIndex, setActionIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const actions = ["Вдох", "Пауза", "Выдох", "Пауза"];
  const totalCycles = 4;
  const intervalRef = useRef(null);

  const handleTimerComplete = () => {
    setShowContent(true);
    startBreathingCycle();
  };


  const startBreathingCycle = () => {
    intervalRef.current = setInterval(() => {
      setActionIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % actions.length;

        if (nextIndex === 0) {
          setCycleCount(prevCount => {
            const newCount = prevCount + 1;
            if (newCount > totalCycles) {
              clearInterval(intervalRef.current);
              setShowButtons(true);
              return totalCycles;
            }
            return newCount;
          });
        }
        return nextIndex;
      });
    }, 4000);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const restartCycle = () => {
    setCycleCount(1);
    setActionIndex(0);
    setShowButtons(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    startBreathingCycle();
  };

  if (showContent) {
    if (showButtons) {
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
        </div >
      )
    }

    return (
      <div className="container">
        <div className="breathing">
          <div className="breathing__inner">
            <div className="breathing__action">{actions[actionIndex]}</div>
            <div className="parabola-container">
              <svg viewBox="0 0 300 300" className="parabola-svg">
                <path className="parabola" d="M0,150 Q150,150 300,150" />
              </svg>
            </div>
            <div className="breathing__count">Цикл {cycleCount} из {totalCycles}</div>
          </div>
        </div>
      </div>
    )
  };



  return <Timer onTimerComplete={handleTimerComplete} />;


};

export default Ffff;