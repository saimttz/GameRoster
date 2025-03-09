import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileEditMdpCode({ navigation }) {
    const [code, setCode] = useState('');
    const hiddenInputRef = useRef(null);

    const handleResendCode = () => {
        // Logique pour renvoyer le code
        console.log('Code renvoyé');
    };

    const renderCodeInput = () => {
        const codeDigitsArray = new Array(6).fill(0);

        return (
            <TouchableOpacity style={styles.codeInputContainer} onPress={() => hiddenInputRef.current.focus()}>
                {codeDigitsArray.map((_, index) => {
                    const digit = code[index] || '';
                    return (
                        <View key={index} style={styles.codeDigitContainer}>
                            <Text style={styles.codeDigit}>{digit}</Text>
                        </View>
                    );
                })}
            </TouchableOpacity>
        );
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
                        <Text style={styles.headerText}>Saisis le code à 6 chiffres</Text>
                        <Text style={styles.description}>Ton code a été envoyé à +41 76 *** ** **</Text>
                        <TextInput
                            ref={hiddenInputRef}
                            style={styles.hiddenInput}
                            keyboardType="numeric"
                            value={code}
                            onChangeText={setCode}
                            maxLength={6}
                        />
                        {renderCodeInput()}
                        <TouchableOpacity onPress={handleResendCode}>
                            <Text style={styles.resendCodeText}>Renvoyer le code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('ProfileEditMdpNewMdp')}>
                            <Ionicons name="send" size={24} color="white" />
                            <Text style={styles.submitButtonText}>Soumettre</Text>
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
        marginBottom: 20,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    description: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Amaranth-Regular',
        textAlign: 'center',
        marginBottom: 20,
    },
    hiddenInput: {
        position: 'absolute',
        opacity: 0,
    },
    codeInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    codeDigitContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#ff286a',
        width: '15%',
        alignItems: 'center',
    },
    codeDigit: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Amaranth-Bold',
    },
    resendCodeText: {
        color: '#ff286a',
        fontFamily: 'Amaranth-Bold',
        fontSize: 16,
        marginBottom: 20,
    },
    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff286a',
        padding: 10,
        borderRadius: 10,
    },
    submitButtonText: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
        fontSize: 16,
        marginLeft: 10,
    },
});
