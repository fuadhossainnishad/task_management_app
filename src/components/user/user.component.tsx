import { View, Image, Text } from 'react-native';

export interface User {
    profile: string
    name: string
    role: string
}

export default function UserModal({ data }: { data: User }) {
    return (
        <View className="">
            <Image
                source={{ uri: data.profile! }}
                className='h-16 w-16'
                resizeMode='cover'
            />
            <View className=''>
                <Text className=''>{data.name}</Text>
                <Text className=''>{data.role}</Text>

            </View>
        </View>
    )
}