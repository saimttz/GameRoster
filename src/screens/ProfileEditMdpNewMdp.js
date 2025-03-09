import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function ProfileEditMdpNewMdp({ navigation }) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        // Logique pour soumettre le nouveau mot de passe
        console.log('Nouveau mot de passe soumis:', password);
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    };

    return (
        <SafeAreaProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="#ff286a" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.headerText}>Créer un mot de passe</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nouveau mot de passe"
                            placeholderTextColor="#b0b0b0"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmer le mot de passe"
                            placeholderTextColor="#b0b0b0"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <View style={styles.conditionsContainer}>
                            <View style={styles.condition}>
                                <Entypo name="check" size={20} color="#b0b0b0" />
                                <Text style={styles.conditionText}>Au moins 8 caractères</Text>
                            </View>
                            <View style={styles.condition}>
                                <Entypo name="check" size={20} color="#b0b0b0" />
                                <Text style={styles.conditionText}>Une majuscule et une minuscule</Text>
                            </View>
                            <View style={styles.condition}>
                                <Entypo name="check" size={20} color="#b0b0b0" />
                                <Text style={styles.conditionText}>Un chiffre</Text>
                            </View>
                            <View style={styles.condition}>
                                <Entypo name="check" size={20} color="#b0b0b0" />
                                <Text style={styles.conditionText}>Un caractère spécial (@ # ? !)</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                            <Text style={styles.submitButtonText}>Soummetre</Text>

                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
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
        marginBottom: 80,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '85%',
        borderBottomWidth: 2,
        borderBottomColor: '#ff286a',
        color: '#ff286a',
        fontSize: 20,
        fontFamily: 'Amaranth',
        marginBottom: 20,
        textAlign: 'center',
        paddingBottom: 10,
    },
    conditionsContainer: {
        marginTop: 20,
        justifyContent: 'start',
        alignItems: 'flex-start',
        width: '85%',
        marginBottom: 20,
    },
    condition: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    conditionText: {
        color: '#b0b0b0',
        fontFamily: 'Amaranth-Regular',
        fontSize: 14,
        marginLeft: 10,
    },
    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff286a',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        width: '40%',
    },
    submitButtonText: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
        fontSize: 16,

    },
});
