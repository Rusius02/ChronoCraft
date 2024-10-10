import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator, Alert, TouchableOpacity, Text } from "react-native";
import PlanItem from './PlanItem';
import { getPlans } from '../db/database'; // Import the function to get plans

const PlanScreen = ({ navigation }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const fetchedPlans = await getPlans();
        if (fetchedPlans.length === 0) {
          // No plans found, handle it without error
          setPlans([]);
        } else {
          setPlans(fetchedPlans);
        }
      } catch (error) {
        console.error("Failed to fetch plans:", error);
        Alert.alert("Erreur", "Impossible de charger les plans.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleEditPlan = (plan) => {
    navigation.navigate("AddPlanScreen", { planToEdit: plan });
  };

  const handleRemovePlan = (planId) => {
    // Handle plan removal logic here
    console.log(`Removing plan with id: ${planId}`);
  };

  const handleAddPlan = () => {
    navigation.navigate("AddPlanScreen"); // Navigate to AddPlan screen
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#fff" />; // Loading indicator with white color
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {plans.length === 0 ? (
          <Text style={styles.emptyText}>No plans available. Add your first plan!</Text>
        ) : (
          plans.map((plan) => (
            <PlanItem
              key={plan.id}
              plan={plan}
              onEdit={() => handleEditPlan(plan)}
              onRemove={() => handleRemovePlan(plan.id)}
              onPress={() => navigation.navigate('PlanDetailScreen', { planId: plan.id })}
            />
          ))
        )}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddPlan}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000', // Set background to black
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff', // Text color set to white
    marginTop: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007BFF', // Change this color to your preference
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    color: 'white',
  },
});

export default PlanScreen;
