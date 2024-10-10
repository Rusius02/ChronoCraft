// AddPlanScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';
import { addPlan, addActivity } from '../db/database'; // Importez les fonctions d'ajout

const AddPlanScreen = ({ navigation }) => {
  const [planName, setPlanName] = useState('');
  const [activityName, setActivityName] = useState('');
  const [activityDescription, setActivityDescription] = useState('');
  const [activityDuration, setActivityDuration] = useState('');
  const [activities, setActivities] = useState([]);

  const handleAddPlan = async () => {
    if (!planName) {
      Alert.alert('Erreur', 'Veuillez entrer un nom de plan.');
      return;
    }

    try {
      const result = await addPlan(planName);
      const planId = result.insertId;

      // Ajouter les activités associées au plan
      for (const activity of activities) {
        await addActivity(planId, activity.name, activity.description, activity.duration);
      }

      Alert.alert('Succès', 'Plan ajouté avec succès.');
      navigation.navigate('Plans'); // Naviguer vers l'écran Plans
    } catch (error) {
      console.error('Erreur lors de l\'ajout du plan: ', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de l\'ajout du plan.');
    }
  };

  const handleAddActivity = () => {
    if (!activityName || !activityDescription || !activityDuration) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs d\'activité.');
      return;
    }

    // Ajoute l'activité à la liste d'activités
    setActivities(prevActivities => [
      ...prevActivities,
      {
        name: activityName,
        description: activityDescription,
        duration: parseInt(activityDuration),
      },
    ]);

    // Réinitialise les champs d'entrée d'activité
    setActivityName('');
    setActivityDescription('');
    setActivityDuration('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un Plan</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom du Plan"
        value={planName}
        onChangeText={setPlanName}
      />
      <Text style={styles.title}>Ajouter une Activité</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom de l'Activité"
        value={activityName}
        onChangeText={setActivityName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description de l'Activité"
        value={activityDescription}
        onChangeText={setActivityDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Durée (en secondes)"
        keyboardType="numeric"
        value={activityDuration}
        onChangeText={setActivityDuration}
      />
      <Button title="Ajouter l'Activité" onPress={handleAddActivity} />
      <Button title="Ajouter le Plan" onPress={handleAddPlan} />
      <FlatList
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.activityContainer}>
            <Text style={styles.activityText}>{item.name}</Text>
            <Text style={styles.activityText}>{item.description}</Text>
            <Text style={styles.activityText}>Durée: {item.duration}s</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  activityContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  activityText: {
    fontSize: 16,
  },
});

export default AddPlanScreen;
