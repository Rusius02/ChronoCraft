import React, { useState, useEffect } from 'react';
import Chrono from "../model/Chrono";

// ...

function ChronoComponent() {
  const [chrono, setChrono] = useState<Chrono>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPaused: true, // Vous pouvez initialiser le timer en pause
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Fonction pour réduire le temps
    const decreaseTime = () => {
      if (!chrono.isPaused) {
        if (chrono.seconds > 0) {
          setChrono({
            ...chrono,
            seconds: chrono.seconds - 1,
          });
        } else if (chrono.minutes > 0) {
          setChrono({
            ...chrono,
            minutes: chrono.minutes - 1,
            seconds: 59,
          });
        } else if (chrono.hours > 0) {
          setChrono({
            ...chrono,
            hours: chrono.hours - 1,
            minutes: 59,
            seconds: 59,
          });
        } else {
          // Le temps est écoulé, vous pouvez gérer l'événement ici
          // Exemple : Afficher une alerte ou effectuer une autre action
          setChrono({
            ...chrono,
            isPaused: true,
          });
        }
      }
    };

    // Démarrez le timer
    timer = setInterval(decreaseTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [chrono]);

  // Fonction pour démarrer ou mettre en pause le chrono
  const toggleTimer = () => {
    setChrono({
      ...chrono,
      isPaused: !chrono.isPaused,
    });
  };

  // Affichez les heures, minutes, secondes et un bouton pour démarrer/arrêter
  return (
    <div>
      <div>
        <span>{chrono.hours}h </span>
        <span>{chrono.minutes}m </span>
        <span>{chrono.seconds}s</span>
      </div>
      <button onClick={toggleTimer}>
        {chrono.isPaused ? 'Démarrer' : 'Arrêter'}
      </button>
    </div>
  );
}

export default ChronoComponent;
