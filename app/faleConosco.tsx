import HeaderHome from '@/components/headerHome';
import HeroHome from '@/components/mainHome';
import { Image, StyleSheet, Platform, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import MainServicos from '@/components/mainServicos';
import Footer from '@/components/footer';
import MainFaleConosco from '@/components/mainFaleConosco';

export default function faleConosco() {
  const [fontsLoaded] = useFonts({
    'OpenSans': require('../assets/fonts/OpenSans-VariableFont.ttf'),
    'Cookie': require('../assets/fonts/Cookie-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Pode exibir um loading se quiser
  }
  return (
    <>
      <View style={[tw`flex items-center bg-white w-full`, styles.container]}>
        <View style={[tw``,]}>
          <HeaderHome/>
          <MainFaleConosco/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Cookie',
    boxSizing: 'border-box',
  },
});