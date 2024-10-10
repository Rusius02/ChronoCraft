// PlanDetailScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { getPlanById, getActivitiesForPlan } from '../db/database';

const PlanDetailScreen = ({ route, navigation }) => {
  const { planId } = route.params; 
  const [planName, setPlanName] = useState(''); 
  const [activities, setActivities] = useState([]); 

  const fetchPlanDetails = async () => {
    try {
      const plan = await getPlanById(planId);
      setPlanName(plan.name);
      const fetchedActivities = await getActivitiesForPlan(planId);
      setActivities(fetchedActivities);
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du plan :', error);
    }
  };

  useEffect(() => {
    fetchPlanDetails();
  }, []);

  const renderActivity = ({ item }) => (
    <View style={styles.activityContainer}>
      <Text style={styles.activityName}>{item.name}</Text>
      <Text style={styles.activityDescription}>{item.description}</Text>
      <Text style={styles.activityDuration}>Durée : {item.duration} secondes</Text>
    </View>
  );

  const startChrono = () => {
    navigation.navigate('ChronoScreen', { activities }); // Navigate to ChronoScreen with activities
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{planName}</Text> 
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderActivity}
        ListEmptyComponent={<Text style={styles.text}>Aucune activité trouvée</Text>} 
      />
      <Button title="Démarrer le Chrono" onPress={startChrono} color="#61dafb" /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#282c34',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#61dafb',
    marginBottom: 20,
    textAlign: 'center',
  },
  activityContainer: {
    marginBottom: 20,
    backgroundColor: '#3a3f47',
    padding: 10,
    borderRadius: 8,
  },
  activityName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  activityDescription: {
    fontSize: 16,
    color: '#bbbbbb',
    marginBottom: 5,
  },
  activityDuration: {
    fontSize: 14,
    color: '#aaaaaa',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default PlanDetailScreen;
