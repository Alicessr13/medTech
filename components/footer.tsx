import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
export default function Footer() {
    const [fontsLoaded] = useFonts({
        'OpenSans': require('../assets/fonts/OpenSans-VariableFont.ttf'),
        'DMSerif': require('../assets/fonts/DMSerifDisplay-Regular.ttf'),
      });
  return (
    <>
        <View style={[tw`flex flex-row bg-white justify-between mx-2 mb-6 w-full`, ]}>
            <Text style={[tw`text-2xl`, styles.title]}>MedTech</Text>
            <View style={[tw`flex flex-col items-right bg-white`,]}>
                <Text style={[tw`text-sm font-bold`, styles.content]}>Localização</Text>
                <Text style={[tw`text-xs`, styles.content]}>Rua Coronel</Text>
                <Text style={[tw`text-xs`, styles.content]}>Lages - SC</Text>
                <Text style={[tw`text-xs`, styles.content]}>88000-000</Text>
            </View>
            <View style={[tw`flex flex-col items-right bg-white mr-2`,]}>
                <Text style={[tw`text-sm mr-2 font-bold`, styles.content]}>Contato</Text>
                <Text style={[tw`text-xs mr-2`, styles.content]}>teste@medtech.com</Text>
                <Text style={[tw`text-xs mr-2`, styles.content]}>(49) 9 9999-9999</Text>

            </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'DMSerif',
      },
      content: {
        fontFamily: 'OpenSans',
      },
});
