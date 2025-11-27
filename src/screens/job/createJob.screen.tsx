import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { pick, types } from '@react-native-documents/picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { JobStackParamList } from '../../navigation/JobNavigator';

type Props = NativeStackNavigationProp<JobStackParamList, 'CreateJob'>;

export default function CreateJobScreen() {
    const navigation = useNavigation<Props>();

    const [jobName, setJobName] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');
    const [files, setFiles] = useState<any[]>([]);

    // 📌 PICK MULTIPLE FILES (Images + PDF)

    const pickFiles = async () => {
        try {
            const result = await pick({
                type: [types.images, types.pdf],
                multiple: true, // allow multi-selection
            });

            setFiles(prev => [...prev, ...result]);
        } catch (err: any) {
            // Check for cancellation
            if (err?.code === 'DOCUMENT_PICKER_CANCELED') {
                // User cancelled, do nothing
                return;
            }
            console.log('File Pick Error:', err);
        }
    };


    return (
        <View className="flex-1 bg-white">

            {/* HEADER */}
            <View className="flex-row items-center px-6 py-4 mb-6 border-b border-[#D8D9E0]">
                <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>

                <Text className="flex-1 text-center text-2xl font-medium text-black">
                    Create New Job
                </Text>

                <View className="w-8" />
            </View>

            <ScrollView className="px-6" showsVerticalScrollIndicator={false}>

                {/* INPUT FIELD COMPONENT */}
                <Input label="Job Name" placeholder="Write job name" value={jobName} onChange={setJobName} />
                <Input label="Customer Name" placeholder="Write customer name" value={customerName} onChange={setCustomerName} />
                <Input label="Phone Number" placeholder="Write phone number" value={phone} onChange={setPhone} />
                <Input label="Email Address" placeholder="Write email address" value={email} onChange={setEmail} />
                <Input label="Address" placeholder="Write address" value={address} onChange={setAddress} />

                {/* FILE UPLOAD SECTION */}
                <Text className="text-base font-semibold mt-4">* Photos & PDFs</Text>
                <Text className="text-sm text-gray-600 mb-2">
                    You can select multiple files to upload
                </Text>

                <TouchableOpacity
                    onPress={pickFiles}
                    className="bg-[#EFE7D9] border border-[#C8B89A] p-4 rounded-lg mb-4 flex-row items-center justify-center">
                    <Icon name="cloud-upload-outline" size={22} color="#B09050" />
                    <Text className="ml-2 text-base text-[#B09050] font-medium">Select Files</Text>
                </TouchableOpacity>

                {/* SHOW SELECTED FILES */}
                {files.length > 0 && (
                    <View className="mb-4">
                        <Text className="text-base font-semibold mb-2">Selected Files</Text>

                        {files.map((file, index) => (
                            <View
                                key={index}
                                className="p-3 bg-gray-100 rounded-lg mb-2 flex-row justify-between items-center">

                                <View className="flex-1">
                                    <Text className="font-medium text-gray-800">
                                        {file.name}
                                    </Text>
                                    <Text className="text-xs text-gray-500">{file.mimeType}</Text>
                                </View>

                                <TouchableOpacity
                                    onPress={() => {
                                        setFiles(files.filter((_, i) => i !== index));
                                    }}>
                                    <Icon name="trash" size={22} color="red" />
                                </TouchableOpacity>
                            </View>
                        ))}

                        {/* ADD MORE FILE BUTTON */}
                        <TouchableOpacity
                            onPress={pickFiles}
                            className="bg-[#D9CAB3] p-3 rounded-lg mt-3 items-center">
                            <Text className="text-base font-medium text-[#6B4F2A]">
                                + Add More Files
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* NOTES */}
                <Text className="text-base font-semibold mt-3">Notes</Text>
                <TextInput
                    className="border border-gray-300 rounded-lg p-3 text-base mt-2"
                    placeholder="Write necessary notes"
                    value={notes}
                    onChangeText={setNotes}
                    multiline
                    numberOfLines={4}
                />

                <View className="h-10" />

                {/* SUBMIT BUTTON */}
                <TouchableOpacity
                    className="bg-[#B09050] py-4 rounded-full mt-8 mb-10"
                // onPress={() => navigation.navigate('CreateJob')}
                >
                    <Text className="text-center text-white font-semibold text-lg">
                        Submit Now
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

/* REUSABLE INPUT FIELD */
const Input = ({
    label,
    placeholder,
    value,
    onChange,
}: {
    label: string;
    placeholder: string;
    value: string;
    onChange: (t: string) => void;
}) => (
    <View className="mb-4">
        <Text className="text-base font-semibold mb-1">{label}</Text>
        <TextInput
            className="border border-gray-300 rounded-lg p-3 text-base"
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
        />
    </View>
);
