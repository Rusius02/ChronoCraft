// PlanScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PlanItem from './PlanItem';
import EditButton from '../componants/EditButton'

const PlanScreen = ({ navigation }) => {
    const plan = {
        // Les données de votre plan ici
      };
  // Liste factice de plans pour l'exemple
  const dummyPlans = [
    { id: 1, name: 'Plan 1' },
    { id: 2, name: 'Plan 2' },
    { id: 3, name: 'Plan 3' },
  ];

  const handleEditPlan = (plan) => {
    navigation.navigate('AddPlan', { planToEdit: plan });
  };

  const handleRemovePlan = (planId) => {
    // Gérez la suppression du plan ici
  };

  return (
    <ScrollView>
      {dummyPlans.map((plan) => (
        <PlanItem
          key={plan.id}
          plan={plan}
          onEdit={() => handleEditPlan(plan)}
          onRemove={() => handleRemovePlan(plan.id)}
        />
      ))}
    </ScrollView>
  );
}

export default PlanScreen;
