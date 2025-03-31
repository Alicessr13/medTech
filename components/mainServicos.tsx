import { Image, StyleSheet, Platform, View, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Footer from './footer';

export default function MainServicos() {
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
            <ScrollView style={[tw`bg-white`,]}>

                <View style={[tw`flex flex-row bg-white mx-4 mb-6 `,]}>
                    <Text style={[tw`text-3xl mr-2`, styles.title, { width: 130 }]}>Nossos Serviços</Text>
                    <Text style={[tw`text-xs ml-2 text-justify`, styles.content, { width: 180 }]}>Conheça nossos instrutores dedicados, apaixonados por transformar como você interage com a tecnologia de assistência médica. Eles estão prontos para guiá-lo com suas experiências e conhecimentos de forma clara e acessível, tornando seu aprendizado envolvente e efetivo.</Text>
                </View>

                <View style={[tw`flex bg-white mx-4 mb-6 `,]}>
                    <Image source={require('../assets/images/som.jpg')} style={[tw`rounded-lg flex justify-center items-center mb-2`, { width: 330, height: 300 }]} alt='A imagem mostra dois aparelhos auditivos retroauriculares, um na cor cinza e outro bege. Eles possuem um design curvado que se encaixa atrás da orelha, com tubos transparentes para direcionar o som ao canal auditivo. Ambos os dispositivos apresentam botões de ajuste e componentes dourados na parte superior.' ></Image>
                    <Text style={[tw`text-lg mb-2`, styles.title]}>Som Claro</Text>
                    <Text style={[tw`text-lg mb-2`, styles.content]}>R$ 255</Text>
                    <Text style={[tw`text-xs text-justify`, styles.content]}>Descubra o prazer da audição nítida com nossos aparelhos que combinam tecnologia auditivos de ponta. Projetados avançada e conforto para se ajustar ao seu estilo de incomparável, garantindo vida, eles trazem o mundo de mobilidade suave e volta aos seus ouvidos de personalizada para cada maneira confortável e discreta.</Text>
                </View>

                <View style={[tw`flex bg-white mx-4 mb-6 `,]}>
                    <Image source={require('../assets/images/cadeira.jpg')} style={[tw`rounded-lg flex justify-center items-center mb-2`, { width: 330, height: 300 }]} ></Image>
                    <Text style={[tw`text-lg mb-2`, styles.title]}>Cadeira Conforto</Text>
                    <Text style={[tw`text-lg mb-2`, styles.content]}>R$ 385</Text>
                    <Text style={[tw`text-xs text-justify`, styles.content]}>Oferecemos cadeiras de rodas que combinam tecnologia avançada e conforto incomparável, garantindo mobilidade suave e personalizada para cada necessidade.  Nosso objetivo é tornar a sua jornada mais agradável e independente.</Text>
                </View>

                <View style={[tw`flex bg-white mx-4 mb-6 `,]}>
                    <Image source={require('../assets/images/aparelho.jpg')} style={[tw`rounded-lg flex justify-center items-center mb-2`, { width: 330, height: 300 }]} ></Image>
                    <Text style={[tw`text-lg mb-2`, styles.title]}>MediControl</Text>
                    <Text style={[tw`text-lg mb-2`, styles.content]}>R$ 515</Text>
                    <Text style={[tw`text-xs text-justify`, styles.content]}>Descubra o MediControl, a maneira mais fácil de monitorar sua glicose. Simples, preciso e sempre ao seu lado para ajudar no cuidado com a sua saúde.</Text>
                </View>

                <Footer />
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
