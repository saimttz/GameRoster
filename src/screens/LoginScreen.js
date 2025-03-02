import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function LoginScreen({ navigation }) {

    return (

        <SafeAreaProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.imageFond}>
                        <Image style={styles.imageFondImg} source={require('../../assets/pageSite12.png')} transition={false} />
                    </View>
                    <View style={styles.iconRetour}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={23} color="#ff286a" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textEntree}>
                        <Text style={styles.textEntreeText}>Connexion</Text>
                        <View style={styles.textEnDeux}>
                            <Text style={styles.textEnDeuxTextUn}>T'étais où ?</Text>
                            <Text style={styles.textEnDeuxTextDeux}>On t'attandait !</Text>
                        </View>
                    </View>
                    <View style={styles.inputBox}>
                        <View style={styles.inputsLogin}>
                            <TextInput style={styles.inputLogin} placeholder='Email' placeholderTextColor={"#414141"} />
                            <TextInput style={styles.inputLogin} placeholder='Mot de passe' placeholderTextColor={"#414141"} secureTextEntry={true} />

                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.buttonLogin}>
                                <Text style={styles.textButtonLogin}>Se connecter</Text>
                            </TouchableOpacity>
                            <View style={styles.textSignUp}>
                                <Text style={styles.inscriptionTextePasEncore}>Pas encore de compte ?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                    <Text style={styles.inscriptionTexteInscr}>Inscription</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </SafeAreaProvider >

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        flexDirection: 'column',
    }, imageFond: {

        width: '100%',
        position: 'absolute',
        zIndex: -1,

    },
    imageFondImg: {
        width: '100%',
        resizeMode: 'contain',
        marginBottom: -151,
    }, contenu: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
    },
    iconRetour: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',


        position: 'absolute',
        zIndex: 1,
        top: 70,
        left: 50,
    },
    textEntree: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: -150,
        marginBottom: 100,
        marginRight: 100,
    },
    textEntreeText: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Amaranth-Bold',
    },
    textEnDeux: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 2,
        marginRight: 50,
    },
    textEnDeuxTextUn: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Amaranth-Regular',

    },
    textEnDeuxTextDeux: {
        color: '#ff286a',
        fontSize: 10,
        fontFamily: 'Amaranth-Regular',

    }, inputBox: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 70,

    },
    inputsLogin: {

        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
    },
    inputLogin: {
        width: '80%',
        borderColor: '#ff286a',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        color: 'white',
        fontWeight: 'bold',


    },
    buttonLogin: {
        width: '100%',
        backgroundColor: '#e51857',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    }, buttonLogin: {
        backgroundColor: '#e51857',
        padding: 10,
        borderRadius: 10,
        width: 220,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textButtonLogin: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Amaranth-Bold',
    },
    textSignUp: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 15,

    },
    inscriptionTextePasEncore: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Amaranth-Regular',
    },
    inscriptionTexteInscr: {
        color: '#ff286a',
        fontSize: 10,
        fontFamily: 'Amaranth-Regular',
    }



})


