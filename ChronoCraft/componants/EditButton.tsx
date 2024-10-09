// EditButton.tsx
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg'; // Importez SvgUri depuis react-native-svg

interface EditButtonProps {
  onPress: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SvgUri width="24" height="24" uri="../img/edit.svg" />
    </TouchableOpacity>
  );
};

export default EditButton;
