import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableHighlight } from 'react-native';
import { SafeAreaProvider, SafeAreaProviderProps, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';


export default function HomeAddGameScreen({ navigation }) {
    const [games, setGames] = useState([
        { id: 1, name: 'Valorant', image: require('../../assets/Images/pochetteJeu/jeu1.jpg') },
        { id: 2, name: 'Rainbow six siege', image: require('../../assets/Images/pochetteJeu/jeu2.jpg') },
        { id: 3, name: 'Game 3', image: require('../../assets/Images/pochetteJeu/jeu3.jpg') },
    ]);

    return (
        <SafeAreaProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.contenu}>
                        <View style={styles.textAdd}>
                            <View style={styles.textenDeux}>
                                <Text style={styles.textun}>Ajouter</Text>
                                <Text style={styles.textdeux}>un jeu</Text>
                            </View>
                            <Text style={styles.textDescription}>Selectionne un jeu que tu veux ajouter a ta collection !</Text>
                        </View>
                        <View style={styles.partieJeu}>
                            <View style={styles.rechercheJeu}>
                                <TextInput>recherche un jeu </TextInput>
                            </View>
                            <ScrollView style={styles.ligneJeu}>
                                {games.map((game) => (
                                    <View key={game.id} style={styles.gameItem}>
                                        <Image source={game.image} style={styles.gameImage} />
                                        <Text style={styles.gameName}>{game.name}</Text>
                                    </View>
                                ))}
                            </ScrollView>
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


    },
    contenu: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        marginTop: 100,
        width: '100%',

    },
    textAdd: {
        marginTop: 50,
        flexDirection: 'column',
    },
    textenDeux: {
        flexDirection: 'row',
        gap: 10,

    },
    textun: {
        color: '#ff286a',
        fontSize: 30,
        fontFamily: 'Amaranth-Bold',
    },
    textdeux: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Amaranth-Bold',
    },
    descriptionTextAdd: {
        marginTop: 20,
    },
    textDescription: {
        color: 'grey',
        fontSize: 14,
    },
    partieJeu: {
        marginTop: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',


    },
    rechercheJeu: {
        backgroundColor: 'white',
        width: 300,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ligneJeu: {
        marginTop: 20,
        width: '100%',
    },
    gameItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 20,
    },
    gameImage: {
        width: 120,
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    gameName: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        fontFamily: 'Amaranth-Bold',
    },






});
