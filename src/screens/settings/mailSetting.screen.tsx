import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MailIcon from '../../assets/icons/mail.svg';
import ThreeDotIcon from '../../assets/icons/threedot.svg';
import { MailSettingsAction } from '../../components/Actions';
import { useState } from 'react';

export const MailList = ['buildright.contractors@gmail.com'];

export default function MailSettings() {
  const [openActionIndex, setOpenActionIndex] = useState<number | null>(null);
  return (
    <View className="">
      {MailList.map((mail, ind) => (
        <View key={ind} className="flex-row justify-between items-center">
          <View className="gap-3 items-center">
            <MailIcon width={24} height={24} />
            <Text className="">{mail}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              setOpenActionIndex(openActionIndex === ind ? null : ind)
            }
            className=""
          >
            <ThreeDotIcon width={16} height={16} />
          </TouchableOpacity>

          {/* DROPDOWN MENU */}
          {openActionIndex === ind && (
            <View style={styles.dropdown}>
              <MailSettingsAction />
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    top: 35,
    right: 0,
    zIndex: 999,
    elevation: 10,
    backgroundColor: 'white',
    padding: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  btn: {
    marginHorizontal: 24,
    marginTop: 8,
  },
});
