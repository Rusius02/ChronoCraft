// Plans.tsx
import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import PlanItem from './PlanItem';

const PlanScreen = ({ navigation }) => {
  // Dummy list of plans for example
  const dummyPlans = [
    { id: 1, name: "Plan 1" },
    { id: 2, name: "Plan 2" },
    { id: 3, name: "Plan 3" },
  ];

  const handleEditPlan = (plan) => {
    navigation.navigate("AddPlan", { planToEdit: plan });
  };

  const handleRemovePlan = (planId) => {
    // Handle plan removal logic here
    console.log(`Removing plan with id: ${planId}`);
  };

  const handlePlanPress = (plan) => {
    navigation.navigate("PlanDetailScreen", { planId: plan.id }); // Pass the plan ID or entire plan object if needed
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {dummyPlans.map((plan) => (
          <PlanItem
            key={plan.id}
            plan={plan}
            onEdit={() => handleEditPlan(plan)}
            onRemove={() => handleRemovePlan(plan.id)}
            onPress={handlePlanPress} // Pass the handlePlanPress function
          />
        ))}
      </ScrollView>

      {/* Add Plan Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("AddPlanScreen")}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Set background color
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007BFF', // Button color
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 60,
  },
});

export default PlanScreen;
