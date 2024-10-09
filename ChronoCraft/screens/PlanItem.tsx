import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface PlanItemProps {
    plan: any; // Remplacez 'any' par le type approprié pour 'plan'
    onEdit: (param: any) => void; // Remplacez 'any' par le type approprié pour le paramètre de 'onEdit'
    onRemove: (param: any) => void; // Spécifiez le type approprié pour 'onRemove' si nécessaire
  }

const PlanItem: React.FC<PlanItemProps> = ({ plan, onEdit, onRemove }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <Text style={{ flex: 1 }}>{plan.name}</Text>
    </View>
  );
};

export default PlanItem;
