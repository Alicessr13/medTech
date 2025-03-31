import { Image, StyleSheet, Platform, View, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Footer from './footer';

export default function MainFaleConosco() {
    const [fontsLoaded] = useFonts({
        'OpenSans': require('../assets/fonts/OpenSans-VariableFont.ttf'),
        'DMSerif': require('../assets/fonts/DMSerifDisplay-Regular.ttf'),
    });
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    return (
        <>
            <ScrollView style={[tw`bg-white`,]}>

                <View style={[tw`flex flex-col bg-white mx-4 mb-6 `,]}>
                    <Text style={[tw`text-3xl mb-2`, styles.title]}>Vamos conversar?
                    </Text>
                    <Text style={[tw`text-lg mb-2 text-justify`, styles.content]}>
                        Basta preencher o formulário abaixo e nossa equipe entrará em contato com você rapidinho!
                    </Text>
                </View>

                <View style={[tw`flex bg-white px-4 pb-6 mb-6`, { backgroundColor: '#c2bebe' }]}>
                    <View style={[tw`mt-2`,]}>
                        <Text style={[tw`text-lg mb-2`, styles.title]}>Fale conosco</Text>
                        <Text style={[tw`text-xs mb-2`, styles.content]}>Quer trabalhar em conjunto?</Text>
                        <Text style={[tw`text-xs mb-2`, styles.content]}>Preencha o formulário, e entraremos em contato em breve! Será um prazer falar com você.</Text>
                    </View>
                    <View style={[tw`flex justify-between mt-2`,]}>
                        <Text style={[tw`text-sm mb-2`, styles.content]}>Nome:</Text>
                        <TextInput
                            style={[tw`w-full border-2 border-black p-2 rounded-full`, styles.content]}
                            placeholder="Digite seu nome"
                            value={nome}
                            onChangeText={setNome}
                        />
                        <Text style={[tw`text-sm mb-2`, styles.content]}>E-mail:</Text>
                        <TextInput
                            style={[tw`w-full border-2 border-black p-2 rounded-full`, styles.content]}
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Text style={[tw`text-sm mb-2`, styles.content]}>Mensagem:</Text>
                        <TextInput
                            style={[tw`w-full border-2 border-black p-2 rounded-xl h-20`, styles.content]}
                            placeholder="Digite sua mensagem"
                            value={mensagem}
                            onChangeText={setMensagem}
                        />
                    </View>
                    <TouchableOpacity style={[tw`bg-black px-4 py-2 mt-2 rounded-full w-24`]}><Text style={[tw`text-sm text-center text-white`, styles.content]}>Enviar</Text></TouchableOpacity>
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
