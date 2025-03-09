import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function ProfileSettingScreen({ navigation }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const loadSettings = async () => {
            const darkMode = await AsyncStorage.getItem('darkMode');
            if (darkMode !== null) setIsDarkMode(JSON.parse(darkMode));
        };
        loadSettings();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="#ff286a" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Paramètres</Text>
                </View>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Compte</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileEditMdpCode')}>
                            <Text style={styles.buttonText}>Changer le mot de passe</Text>
                            <Entypo name="chevron-right" size={24} color="#ff286a" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Contenu et apparence</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AffichageSetting')}>
                            <Text style={styles.buttonText}>Affichage</Text>
                            <Entypo name="chevron-right" size={24} color="#ff286a" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Notifications</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Préférences de notification</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Service client</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>À propos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>F.A.Q</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Signaler un problème</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Conditions et Politique</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Conditions d'utilisation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Politique de confidentialité</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Autre</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Deconnexion</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Supprimer mon compte</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.versionText}>Version 0.0.0 (0000000)</Text>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626",
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
        alignSelf: 'center',
    },
    headerText: {
        color: '#ff286a',
        fontSize: 24,
        fontFamily: 'Amaranth-Bold',
        marginLeft: 10,
    },
    section: {
        width: '90%',
        marginBottom: 30,
    },
    sectionTitle: {
        color: '#ff286a',
        fontSize: 20,
        fontFamily: 'Amaranth-Bold',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#414141',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Amaranth-Regular',
        fontSize: 16,
    },
    versionText: {
        color: '#b0b0b0',
        fontFamily: 'Amaranth-Regular',
        fontSize: 12,
        marginTop: 20,
        alignSelf: 'center',
    },
});
