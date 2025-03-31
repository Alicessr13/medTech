import { Image, StyleSheet, Platform, View, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Footer from './footer';

export default function HeroHome() {
  const [fontsLoaded] = useFonts({
    'OpenSans': require('../assets/fonts/OpenSans-VariableFont.ttf'),
    'DMSerif': require('../assets/fonts/DMSerifDisplay-Regular.ttf'),
  });
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [agendamento, setAgendamento] = useState('');
  return (
    <>
      <ScrollView>
        <View style={[tw`flex justify-center items-center rounded-lg`,]}>
          <ImageBackground source={require('../assets/images/unnamed.png')} style={[tw`rounded-lg flex justify-center items-center`, { width: 340, height: 200 }]} alt='A imagem mostra uma sala de espera de uma clínica médica com cadeiras estofadas de madeira organizadas ao longo das paredes. As paredes são pintadas de azul claro e possuem pôsteres informativos sobre saúde. Há algumas plantas decorativas no ambiente. Na recepção, um profissional de saúde está atrás do balcão, e uma TV na parede exibe uma paisagem natural. O espaço é bem iluminado, com luz natural entrando por janelas altas e iluminação artificial no teto.' >
            <Text style={[tw`text-white text-center text-sm`, styles.title]}>Cuidados medicos simplificados com tecnologia</Text>
          </ImageBackground >
        </View>

        <View style={[tw`flex justify-center items-center my-6`,]}>
          <View style={[tw`flex justify-center items-center`,]}>
            <Text style={[tw`text-lg font-bold mb-2`, styles.content]}>Bem-vindo à MedTech </Text>
            <Text style={[tw`text-lg font-bold mb-2`, styles.content]}>
              Inovação e Tecnologia a Serviço da Saúde
            </Text>
          </View>
          <View style={[tw`flex flex-row justify-center px-4 py-2`, { width: 200 }]}>
            <View style={[tw`pr-2`,]}>
              <Image source={require('../assets/images/consultorio2.jpeg')} style={[tw`rounded-lg`, { width: 150, height: 200 }]} />
            </View>
            <View style={[tw`flex flex-col px-2`,]}>
              <Text style={[tw`text-sm mb-2 text-justify`, styles.content]}>Na MedTech, nossa missão é transformar a experiência de profissionais da saúde, clínicas através da oferta dos mais modernos e eficientes equipamentos e artigos médicos disponíveis no mercado. </Text>
            </View>
          </View>
          <View>
            <Text style={[tw`flex flex-row justify-center px-4 text-justify mb-2`, styles.content]}>
              Somos uma loja especializada em tecnologia médica de ponta, comprometida com a excelência, a segurança e o bem-estar de pacientes e profissionais.
            </Text>
          </View>

          <View style={[tw`w-full px-4 py-2`,]}>
            <View style={[tw`flex flex-col w-full border-2 border-black rounded-md p-2`,]}>
              <Text style={[tw`flex flex-row text-justify text-lg`, styles.title]}>Agendamento</Text>
              <View style={[tw`flex flex-col w-full pt-2`,]}>
                <TextInput
                  style={[tw`w-full border-2 border-black p-2 rounded-md`, styles.content]}
                  placeholder="Digite seu nome"
                  value={nome}
                  onChangeText={setNome}
                />
              </View>
              <View style={[tw`flex flex-col w-full pt-2`,]}>
                <TextInput
                  style={[tw`w-full border-2 border-black p-2 rounded-md`, styles.content]}
                  placeholder="Digite seu email"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View style={[tw`flex flex-col w-full pt-2`,]}>
                <TextInput
                  style={[tw`w-full border-2 border-black p-2 rounded-md`, styles.content]}
                  placeholder="Digite seu telefone"
                  value={telefone}
                  onChangeText={setTelefone}
                />
              </View>
              <View style={[tw`flex flex-col w-full pt-2`,]}>
                <TextInput
                  style={[tw`w-full border-2 border-black p-2 rounded-md`, styles.content]}
                  placeholder="Digite o tipo de agendamento"
                  value={agendamento}
                  onChangeText={setAgendamento}
                />
              </View>
              <TouchableOpacity style={[tw`bg-black px-4 py-2 mt-2 rounded-md`]}><Text style={[tw`text-xs text-center text-white`, styles.content]}>Agende agora</Text></TouchableOpacity>
            </View>
           
          </View>
        
        </View>
        <Footer/>
      </ScrollView>
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
