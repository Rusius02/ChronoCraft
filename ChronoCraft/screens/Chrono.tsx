// ChronoScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';

// Assurez-vous que les sons soient disponibles
Sound.setCategory('Playback');

const ChronoScreen = ({ route, navigation }) => {
  const { activities } = route.params;
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (activities.length > 0) {
      setTimeRemaining(activities[currentActivityIndex].duration);
    }
  }, [activities]);

  useEffect(() => {
    let timer;
    if (isRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
        playBeep();
      }, 1000);
    } else if (timeRemaining === 0) {
      clearInterval(timer);
      playEndBeep();
      if (currentActivityIndex < activities.length - 1) {
        setCurrentActivityIndex(currentActivityIndex + 1);
        setTimeRemaining(activities[currentActivityIndex + 1].duration);
      } else {
        setIsRunning(false);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeRemaining]);

  const playBeep = () => {
    const beep = new Sound(require('../assets/sounds/Beep_Exercices.wav'), (error) => {
      if (error) {
        console.log('Failed to load sound', error);
        return;
      }
      beep.play((success) => {
        beep.release(); // Libération de la ressource
      });
    });
  };

  const playEndBeep = () => {
    const endBeep = new Sound('../assets/sounds/End_Beep.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load sound', error);
        return;
      }
      endBeep.play((success) => {
        endBeep.release(); // Libération de la ressource
      });
    });
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {activities[currentActivityIndex]?.name || 'Fin des activités'}
      </Text>
      <Text style={styles.timer}>{timeRemaining}s</Text>
      {!isRunning && (
        <Button title="Démarrer" onPress={startTimer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#61dafb',
    marginBottom: 20,
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
});

export default ChronoScreen;
