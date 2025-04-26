import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
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
      <View style={[tw`flex flex-row items-center bg-white justify-between mx-2 my-6`,]}>
        <Text style={[tw`text-lg`, styles.title]}>MedTech</Text>
        <View style={[tw`flex flex-row items-center bg-white`,]}>
          <Link href="/faleConosco" style={[tw`mr-4`]}><Text style={[tw`text-xs`, styles.content]}>Fale conosco</Text></Link>
          <Link href="/servicos" style={[tw`mr-4`]}><Text style={[tw`text-xs`, styles.content]}>Serviços</Text></Link>
          <Link href="/"><Text style={[tw`text-xs`, styles.content]}>Quem somos</Text></Link>

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
