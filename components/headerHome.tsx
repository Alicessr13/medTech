import { Image, StyleSheet, Platform, View, Text,  TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
export default function HeaderHome() {
    const [fontsLoaded] = useFonts({
        'OpenSans': require('../assets/fonts/OpenSans-VariableFont.ttf'),
        'DMSerif': require('../assets/fonts/DMSerifDisplay-Regular.ttf'),
      });
  return (
    <>
        <View style={[tw`flex flex-row items-center bg-white justify-between mx-2 my-6`, ]}>
            <Text style={[tw`text-lg`, styles.title]}>MedTech</Text>
            <View style={[tw`flex flex-row items-center bg-white`,]}>
                <Link href="/servicos"><Text style={[tw`text-xs mr-2`, styles.content]}>Serviços</Text></Link>
                <Text style={[tw`text-xs mr-2`, styles.content]}>Quem somos</Text>
                <TouchableOpacity style={[tw`bg-black px-4 py-2 rounded-full`]}><Text style={[tw`text-xs text-white`, styles.content]}>Agende agora</Text></TouchableOpacity>
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
