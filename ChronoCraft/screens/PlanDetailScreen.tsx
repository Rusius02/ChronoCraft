// PlanDetailScreen.js
import React from 'react';
import PlanItem from './PlanItem';

function PlanDetailScreen({ route }) {
  const { plan } = route.params;

  const handleEdit = () => {
    // Logique pour la modification du plan
  };

  const handleRemove = () => {
    // Logique pour la suppression du plan
  };

  return (
    <PlanItem plan={plan} onEdit={handleEdit} onRemove={handleRemove} />
  );
}

export default PlanDetailScreen;
