// PlanItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PlanItemProps {
    plan: { id: number; name: string }; // Use appropriate type for 'plan'
    onEdit: (param: any) => void; // Callback to edit plan
    onRemove: (param: any) => void; // Callback to remove plan
    onPress: (param: any) => void; // Callback for item press
}

const PlanItem: React.FC<PlanItemProps> = ({ plan, onEdit, onRemove, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(plan)}>
            <Text style={styles.planName}>{plan.name}</Text>
            {/* You can include buttons for edit and remove if needed */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => onEdit(plan)}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onRemove(plan.id)}>
                    <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#e0f7fa', // Change to a suitable background color
    },
    planName: {
        fontSize: 18,
        color: '#333', // Change text color for visibility
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editText: {
        color: 'blue', // Color for edit button
        marginRight: 10,
    },
    removeText: {
        color: 'red', // Color for remove button
    },
});

export default PlanItem;
