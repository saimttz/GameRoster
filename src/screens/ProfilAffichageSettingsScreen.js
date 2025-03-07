import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Switch } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Checkbox from 'expo-checkbox';

export default function DisplaySettingsScreen({ navigation }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [useDeviceSettings, setUseDeviceSettings] = useState(false);

    const handleDarkModeChange = (value) => {
        setIsDarkMode(value);
        if (value) {
            setUseDeviceSettings(false);
        }
    };

    const handleDeviceSettingsChange = (value) => {
        setUseDeviceSettings(value);
        if (value) {
            setIsDarkMode(false);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="#ff286a" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Affichage</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Apparence</Text>
                    <View style={styles.appearanceOptions}>
                        <View style={styles.appearanceOption}>
                            <Image source={require('../../assets/Images/Preview/previewSiteClair.png')} style={styles.appearanceImage} />
                            <Text style={styles.appearanceText}>Clair</Text>
                            <Checkbox
                                value={!isDarkMode}
                                onValueChange={() => handleDarkModeChange(false)}
                                color={'#ff286a'}
                            />
                        </View>
                        <View style={styles.appearanceOption}>
                            <Image source={require('../../assets/Images/Preview/previewSiteFonce.png')} style={styles.appearanceImage} />
                            <Text style={styles.appearanceText}>Sombre</Text>
                            <Checkbox
                                value={isDarkMode}
                                onValueChange={() => handleDarkModeChange(true)}
                                color={'#ff286a'}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Utiliser les paramètres de l'appareil</Text>
                    <Text style={styles.sectionDescription}>Fais correspondre l'apparence aux paramètres d'affichage et de luminosité de ton appareil</Text>
                    <Switch
                        value={useDeviceSettings}
                        onValueChange={handleDeviceSettingsChange}
                        trackColor={{ false: '#767577', true: '#ff286a' }}
                        thumbColor={useDeviceSettings ? '#ff286a' : '#f4f3f4'}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#414141',
    },
    headerText: {
        color: '#ff286a',
        fontSize: 24,
        fontFamily: 'Amaranth-Bold',
        marginLeft: 10,
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#414141',
    },
    sectionTitle: {
        color: '#ff286a',
        fontSize: 20,
        fontFamily: 'Amaranth-Bold',
        marginBottom: 10,
    },
    appearanceOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    appearanceOption: {
        alignItems: 'center',
    },
    appearanceImage: {
        width: 90,
        height: 150,
        marginBottom: 10,
    },
    appearanceText: {
        color: 'white',
        fontFamily: 'Amaranth-Regular',
        fontSize: 16,
        marginBottom: 10,
    },
    sectionDescription: {
        color: '#b0b0b0',
        fontFamily: 'Amaranth-Regular',
        fontSize: 14,
        marginBottom: 10,
    },
});
