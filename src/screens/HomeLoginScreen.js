import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';




export default function HomeLoginScreen({ navigation }) {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.imageFond2}>
                    <Image style={styles.imageFondImg2} source={require('../../assets/pageSite10.png')} />
                </View>
                <View style={styles.contenuPage}>
                    <View style={styles.marqueLogoText}>
                        <Image style={styles.marqueLogo} source={require('../../assets/logoContourText.png')} />
                        <View style={styles.textMarque}>
                            <Text style={styles.gameText}>Game</Text>
                            <Text style={styles.rosterText}>Roster</Text>
                        </View>
                    </View>
                    <View style={styles.inputsLogin}>
                        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.textButtonLogin}>Se connecter</Text>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.textButtonLogin}>S'enregister</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    imageFond: {

        width: '100%',
        position: 'absolute',
        zIndex: -1,
    },
    imageFondImg: {

        width: '100%',
        resizeMode: 'contain',
        marginTop: -150,
    },
    imageFond2: {

        width: '100%',
        position: 'absolute',

        zIndex: -1,
    },
    imageFondImg2: {

        width: '100%',
        resizeMode: 'contain',
        marginTop: 150,
    },
    marqueLogoText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',

        justifyContent: 'top',
        alignItems: 'center',
        marginTop: 100,
    },
    marqueLogo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    textMarque: {
        width: '100%',
        flexDirection: 'row',


    }, gameText: {
        color: '#e51857',
        fontSize: 45,
        textAlign: 'center',
        fontFamily: 'airstream',

    },
    rosterText: {
        color: 'white',
        fontSize: 45,
        textAlign: 'center',
        fontFamily: 'airstream',

    },
    inputsLogin: {
        flex: 2,
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'center',
        marginTop: -120,
        color: 'white',

    },
    buttonLogin: {
        backgroundColor: '#e51857',
        padding: 10,
        borderRadius: 10,
        width: 200,
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
    contenuPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50,
    }

});
