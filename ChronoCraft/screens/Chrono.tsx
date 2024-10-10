import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ChronoComponent = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const newTimer = setInterval(() => {
        setTime(prevTime => {
          const newSeconds = prevTime.seconds + 1;

          if (newSeconds === 60) {
            return {
              hours: prevTime.hours,
              minutes: prevTime.minutes + 1,
              seconds: 0,
            };
          }

          if (prevTime.minutes === 60) {
            return {
              hours: prevTime.hours + 1,
              minutes: 0,
              seconds: newSeconds,
            };
          }

          return { ...prevTime, seconds: newSeconds };
        });
      }, 1000);

      setTimer(newTimer);
    } else if (!isRunning && timer) {
      clearInterval(timer);
      setTimer(null);
    }

    // Cleanup function to clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [isRunning, timer]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
    console.log(isRunning ? "Stopping timer..." : "Starting timer...");
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    clearInterval(timer); // Stop the timer
    console.log("Timer reset.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timeDisplay}>
        {String(time.hours).padStart(2, '0')}:
        {String(time.minutes).padStart(2, '0')}:
        {String(time.seconds).padStart(2, '0')}
      </Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleStartStop}>
       <Text style={styles.buttonText}>{isRunning ? "Stop" : "Start"}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={handleReset}>
      <Text style={styles.buttonText}>Reset</Text>
    </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeDisplay: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', // White text color for better visibility on dark background
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    backgroundColor: '#6200ee', // Color of the button
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#ffffff', // White text color
    fontSize: 18,
  },
  
});

export default ChronoComponent;
