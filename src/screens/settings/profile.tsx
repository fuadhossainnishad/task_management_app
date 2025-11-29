import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface Field {
  label: string;
  value: string;
}

interface ProfileProps {
  title: string;
  mode: 'view' | 'edit';
  type: 'user' | 'company';
  fields: Field[];
  onSave?: (data: Field[]) => void;
}

export default function ProfileScreen({
  title,
  mode,
  type,
  fields,
  onSave,
}: ProfileProps) {
  const [formData, setFormData] = useState<Field[]>(fields);

  const updateField = (index: number, value: string) => {
    const updated = [...formData];
    updated[index].value = value;
    setFormData(updated);
  };

  return (
    <ScrollView className="p-4">
      {/* Title */}
      <Text className="text-2xl font-semibold mb-4">{title}</Text>

      {/* Fields */}
      {formData.map((field, index) => (
        <View key={index} className="mb-4">
          <Text className="text-gray-500 text-sm mb-1">{field.label}</Text>

          {mode === 'view' ? (
            <Text className="text-base font-medium">{field.value}</Text>
          ) : (
            <TextInput
              className="border border-gray-300 p-2 rounded-lg bg-white"
              value={field.value}
              onChangeText={text => updateField(index, text)}
            />
          )}
        </View>
      ))}

      {/* Button */}
      {mode === 'view' ? (
        <TouchableOpacity className="bg-blue-500 p-3 rounded-lg mt-5">
          <Text className="text-white text-center font-medium">
            Edit Profile Info
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="bg-green-600 p-3 rounded-lg mt-5"
          onPress={() => onSave && onSave(formData)}
        >
          <Text className="text-white text-center font-medium">
            Save Changes
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}
