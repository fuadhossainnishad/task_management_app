import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import AppHeader from "../../components/AppHeader";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UsersStackParamList } from "../../navigation/UsersNavigator copy";

type InputField = {
    label: string;
    placeholder: string;
    key: string;
    secure?: boolean;
    type?: "text" | "email" | "phone" | "password";
    options?: string[]; // for select dropdowns
};
type Props = NativeStackNavigationProp<UsersStackParamList, 'AddNewUser'>

export default function AddNewUserScreen() {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [role, setRole] = useState<string>("");
    const navigation = useNavigation<Props>()


    const inputFields: InputField[] = [
        { label: "Full Name", placeholder: "Alex Smith", key: "name" },
        { label: "Email", placeholder: "alexsmith@gmail.com", key: "email" },
        { label: "Phone Number", placeholder: "+1 (555) 123-4567", key: "phone" },
        { label: "Address", placeholder: "128 Maple Rd, Fort Worth, TX 76102", key: "address" },
        { label: "Password", placeholder: "Enter your password", key: "password", secure: true },
        { label: "Confirm Password", placeholder: "Confirm your password", key: "confirmPassword", secure: true },
        {
            label: "Assign Role",
            placeholder: "Select role",
            key: "role",
            options: ["Owner", "Admin", "Project Manager", "Crew", "Accountant", "Viewer"],
        },
    ];

    return (
        <View className="flex-1 ">
            <AppHeader title='Add New User' onBack={() => { navigation.goBack() }} />
            <ScrollView className="flex-1 p-4 bg-white">
                {inputFields.map((field) => (
                    <View key={field.key} className="mb-4">
                        <Text className="text-gray-700 mb-1 font-semibold">{field.label}</Text>

                        {field.options ? (
                            // Dropdown for roles
                            <View className="border border-gray-300 rounded-lg p-3">
                                {field.options.map((option) => (
                                    <TouchableOpacity
                                        key={option}
                                        onPress={() => setRole(option)}
                                        className={`p-2 rounded ${role === option ? "bg-blue-500" : ""}`}
                                    >
                                        <Text className={`${role === option ? "text-white" : "text-gray-700"}`}>{option}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ) : (
                            <TextInput
                                placeholder={field.placeholder}
                                secureTextEntry={field.secure}
                                value={formData[field.key] || ""}
                                onChangeText={(text) =>
                                    setFormData((prev) => ({ ...prev, [field.key]: text }))
                                }
                                className="border border-gray-300 rounded-lg p-3"
                            />
                        )}
                    </View>
                ))}

                <TouchableOpacity
                    className="bg-blue-500 py-3 rounded-lg mt-6"
                    onPress={() => console.log({ ...formData, role })}
                >
                    <Text className="text-white text-center font-semibold">Add User</Text>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity
                // onPress={() => navigation.navigate('CreateJob')}
                className=" bg-[#B09050] px-6 py-4 rounded-full shadow-lg"
            >
                <Text className="text-black text-center font-normal text-lg">
                    Create New Job
                </Text>
            </TouchableOpacity>
        </View>

    );
}
