import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function ProfileEditScreen({ navigation }) {
    const [areas, setAreas] = useState([]);
    const [selectedArea, setSelectedArea] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then((response) => response.json())
            .then((data) => {
                let areaData = data.map((item) => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `${item.callingCodes[0]}`,
                        flag: `https://flagsapi.com/${item.code}/flat/64.png`,
                    }
                });
                setAreas(areaData);
                if (areaData.length > 0) {
                    let defaultData = areaData.filter(a => a.code === "CH");

                    if (defaultData.length > 0) {
                        setSelectedArea(defaultData[0]);
                    }

                }
            });
    }, []);


    function renderAreasCodesModal() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ padding: 10, flexDirection: 'row' }}
                    onPress={() => {
                        setSelectedArea(item);
                        setModalVisible(false);
                    }}
                >
                    <Image
                        source={{ uri: `https://flagsapi.com/${item.code}/flat/64.png` }}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 10,
                        }}
                    />
                    <Text style={{ fontSize: 16, color: 'white' }}>{item.name} ({item.callingCode})</Text>
                </TouchableOpacity>
            );
        }

        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                keyExtractor={item => item.code}
                                showsVerticalScrollIndicator={false}
                                style={{ marginBottom: 20 }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="#ff286a" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Modifier le profil</Text>
                </View>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.avatarContainer}>
                        <Image
                            style={styles.avatar}
                            source={require('../../assets/Images/Profile/pp/images.jpg')}
                        />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Modifier l'avatar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bannerContainer}>
                        <Image
                            style={styles.banner}
                            source={require('../../assets/Images/backgroundImage/valo.png')}
                            transition={false}
                        />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Modifier la bannière</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nom d'utilisateur</Text>
                        <TextInput style={styles.input} placeholder="Nom d'utilisateur" placeholderTextColor="#414141" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Numéro de téléphone</Text>
                        <View style={styles.phoneParts}>
                            <View style={styles.countryCodePickerContainer}>
                                <TouchableOpacity style={styles.countryCodePicker} onPress={() => setModalVisible(true)}>
                                    <View style={{ marginRight: 10 }}>
                                        <AntDesign name="down" size={20} color="white" />
                                    </View>
                                    <View>
                                        <Image style={styles.countryFlag} source={{ uri: `https://flagsapi.com/${selectedArea?.code}/flat/64.png` }}></Image>
                                    </View>
                                    <View>
                                        <Text style={styles.selectedAreaCodeText} >+{selectedArea?.callingCode}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                style={styles.phoneInput}
                                placeholder="Numéro de téléphone"
                                placeholderTextColor="#414141"
                                keyboardType="phone-pad"
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#414141" keyboardType="email-address" />
                    </View>
                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Enregistrer</Text>
                    </TouchableOpacity>
                    {renderAreasCodesModal()}
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
        color: '#ff286a', // Pink color for text
        fontSize: 24,
        fontFamily: 'Amaranth-Bold',
        marginLeft: 10,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    bannerContainer: {
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
    },
    banner: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
        maxHeight: 200,
        maxWidth: 400,
    },
    button: {
        backgroundColor: '#ff286a',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
    },
    inputContainer: {
        width: '90%',
        marginBottom: 20,
    },
    label: {
        color: '#ff286a', // Pink color for labels
        fontFamily: 'Amaranth-Bold',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#414141',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        fontFamily: 'Amaranth-Regular',
    },
    phoneParts: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryCodePickerContainer: {
        backgroundColor: '#414141',
        borderRadius: 10,
        marginRight: 10,
        overflow: 'hidden',
    },
    countryCodePicker: {
        height: 50,
        width: 100,
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedAreaCodeText: {
        color: 'white',
        fontFamily: 'Amaranth-Regular',
    },
    countryFlag: {
        width: 20,
        height: 30,
        resizeMode: 'contain',
    },
    phoneInputContainer: {
        flex: 1,
    },
    phoneInput: {
        flex: 1,
        backgroundColor: '#414141',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        fontFamily: 'Amaranth-Regular',
    },

    saveButton: {
        backgroundColor: '#ff286a',
        padding: 15,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
        fontSize: 18,
    },
    pickerItem: {
        color: 'white', // Ensure text color is visible
        fontSize: 16, // Adjust font size if needed
    },
    modalOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: '80%', // Smaller width
        backgroundColor: '#414141',
        padding: 20,
        borderRadius: 10,
        maxHeight: '50%', // Limit the height
    },
});


