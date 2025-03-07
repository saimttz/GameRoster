import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const channels = [
    { id: 1, name: 'Valorant 5 Stack', lastMessage: 'Salut, on commence à 20h ?', timestamp: '2 hours ago', gameImage: require('../../assets/Images/pochetteJeu/jeu1.jpg'), avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg' },
    { id: 2, name: 'R6 teammates', lastMessage: 'Qui est dispo pour une partie ?', timestamp: '1 day ago', gameImage: require('../../assets/Images/pochetteJeu/jeu2.jpg'), avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg' },
    // Ajoutez d'autres canaux ici
];

export default function ChatScreen({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.headerTitle}>Messages</Text>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {channels.map(channel => (
                        <TouchableOpacity key={channel.id} style={styles.channelContainer} onPress={() => navigation.navigate('ChatDetail')}>
                            <View style={styles.channelHeader}>
                                <Image style={styles.gameImage} source={channel.gameImage} />
                                <Image style={styles.avatar} source={{ uri: channel.avatar }} />
                                <View style={styles.channelText}>
                                    <Text style={styles.channelName}>{channel.name}</Text>
                                    <Text style={styles.timestamp}>{channel.timestamp}</Text>
                                </View>
                            </View>
                            <Text style={styles.lastMessage}>{channel.lastMessage}</Text>
                        </TouchableOpacity>
                    ))}
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
    headerTitle: {
        color: '#ff286a',
        fontSize: 24,
        fontFamily: 'Amaranth-Bold',
        marginLeft: 20,
        marginTop: 20,
        alignSelf: 'flex-start',
    },
    channelContainer: {
        backgroundColor: '#414141',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center',
    },
    channelHeader: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    gameImage: {
        width: 50,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    channelText: {
        flex: 1,
        justifyContent: 'center',
    },
    channelName: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
        fontSize: 18,
    },
    timestamp: {
        color: '#b0b0b0',
        fontFamily: 'Amaranth-Regular',
        fontSize: 12,
    },
    lastMessage: {
        color: 'white',
        fontFamily: 'Amaranth-Regular',
        fontSize: 14,
    },
});
