import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const AddPlanScreen = ({ navigation }) => {
  const [planName, setPlanName] = useState(''); // State for the plan name
  const [activityName, setActivityName] = useState(''); // State for the activity name
  const [activityDescription, setActivityDescription] = useState(''); // State for the activity description
  const [activityDuration, setActivityDuration] = useState(''); // State for the activity duration
  const [activities, setActivities] = useState([]); // State for activities

  const addActivity = () => {
    if (activityName.trim() && activityDescription.trim() && activityDuration.trim()) {
      // Add new activity to the list
      setActivities([...activities, { name: activityName, description: activityDescription, duration: activityDuration }]);
      // Clear input fields
      setActivityName('');
      setActivityDescription('');
      setActivityDuration('');
    } else {
      alert('Please fill in all fields for the activity.');
    }
  };

  const savePlan = () => {
    if (planName.trim() && activities.length > 0) {
      // Save the plan logic here
      console.log('Plan:', planName);
      console.log('Activities:', activities);

      // Clear inputs
      setPlanName('');
      setActivities([]);

      // Navigate back to Plans screen
      navigation.navigate('Plans');
    } else {
      alert('Please fill in the plan name and add at least one activity.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Plan</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter plan name"
        value={planName}
        onChangeText={setPlanName}
      />

      <Text style={styles.subtitle}>Add Activity</Text>
      <TextInput
        style={styles.input}
        placeholder="Activity Name"
        value={activityName}
        onChangeText={setActivityName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={activityDescription}
        onChangeText={setActivityDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (seconds)"
        value={activityDuration}
        keyboardType="numeric"
        onChangeText={setActivityDuration}
      />
      <Button title="Add Activity" onPress={addActivity} />

      <Text style={styles.subtitle}>Added Activities</Text>
      <FlatList
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Name: {item.name}</Text>
            <Text style={styles.activityText}>Description: {item.description}</Text>
            <Text style={styles.activityText}>Duration: {item.duration} seconds</Text>
          </View>
        )}
      />
      <Button title="Save Plan" onPress={savePlan} style={styles.saveButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Dark background color
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', // White text for the title
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff', // White text for subtitle
    marginVertical: 10,
  },
  input: {
    width: '100%', // Full width input
    padding: 10,
    borderColor: '#ffffff', // White border for input
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    color: '#ffffff', // White text in input
  },
  activityItem: {
    backgroundColor: '#1E1E1E', // Dark background for activity items
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  activityText: {
    color: '#ffffff', // White text for activity details
  },
  saveButton: {
    marginTop: 20,
  },
});

export default AddPlanScreen;
