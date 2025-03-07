import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Checkbox from 'expo-checkbox';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    TouchableHighlight,
    Modal,
    Switch,
} from "react-native";
import {
    SafeAreaProvider,
    SafeAreaProviderProps,
    SafeAreaView,
} from "react-native-safe-area-context";

import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState, useRef } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import { CheckBox } from '@react-native-community/checkbox';




export default function HomeAddGameScreen({ navigation }) {


    const [games, setGames] = useState([
        {
            id: 1,
            name: "Valorant",
            image: require("../../assets/Images/pochetteJeu/jeu1.jpg"),
        },
        {
            id: 2,
            name: "Rainbow six siege",
            image: require("../../assets/Images/pochetteJeu/jeu2.jpg"),
        },
        {
            id: 3,
            name: "Game 3",
            image: require("../../assets/Images/pochetteJeu/jeu3.jpg"),
        },
    ]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isCrossPlayEnabled, setIsCrossPlayEnabled] = useState(false);
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [selectedRank, setSelectedRank] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);

    const platforms = ["Xbox", "Playstation", "PC"];
    const ranks = [
        { name: "Iron 1", image: require("../../assets/Images/Valorant/ranks/iron1.png") },
        { name: "Iron 2", image: require("../../assets/Images/Valorant/ranks/iron2.png") },
        { name: "Iron 3", image: require("../../assets/Images/Valorant/ranks/iron3.png") },
        { name: "Bronze 1", image: require("../../assets/Images/Valorant/ranks/bronze1.png") },
        { name: "Bronze 2", image: require("../../assets/Images/Valorant/ranks/bronze2.png") },
        { name: "Bronze 3", image: require("../../assets/Images/Valorant/ranks/bronze3.png") },
        { name: "Silver 1", image: require("../../assets/Images/Valorant/ranks/silver1.png") },
        { name: "Silver 2", image: require("../../assets/Images/Valorant/ranks/silver2.png") },
        { name: "Silver 3", image: require("../../assets/Images/Valorant/ranks/silver3.png") },
        { name: "Gold 1", image: require("../../assets/Images/Valorant/ranks/gold1.png") },
        { name: "Gold 2", image: require("../../assets/Images/Valorant/ranks/gold2.png") },
        { name: "Gold 3", image: require("../../assets/Images/Valorant/ranks/gold3.png") },
        { name: "Platinum 1", image: require("../../assets/Images/Valorant/ranks/platinum1.png") },
        { name: "Platinum 2", image: require("../../assets/Images/Valorant/ranks/platinum2.png") },
        { name: "Platinum 3", image: require("../../assets/Images/Valorant/ranks/platinum3.png") },
        { name: "Diamond 1", image: require("../../assets/Images/Valorant/ranks/diamond1.png") },
        { name: "Diamond 2", image: require("../../assets/Images/Valorant/ranks/diamond2.png") },
        { name: "Diamond 3", image: require("../../assets/Images/Valorant/ranks/diamond3.png") },
        { name: "Ascendant 1", image: require("../../assets/Images/Valorant/ranks/ascendant1.png") },
        { name: "Ascendant 2", image: require("../../assets/Images/Valorant/ranks/ascendant2.png") },
        { name: "Ascendant 3", image: require("../../assets/Images/Valorant/ranks/ascendant3.png") },
        { name: "Immortal 1", image: require("../../assets/Images/Valorant/ranks/immortal1.png") },
        { name: "Immortal 2", image: require("../../assets/Images/Valorant/ranks/immortal2.png") },
        { name: "Immortal 3", image: require("../../assets/Images/Valorant/ranks/immortal3.png") },
        { name: "Radiant", image: require("../../assets/Images/Valorant/ranks/radiant.png") },
    ];
    const roles = [
        { name: "Initiateur", image: require("../../assets/Images/Valorant/roles/initiateur.png") },
        { name: "Duelist", image: require("../../assets/Images/Valorant/roles/duelist.png") },
        { name: "Smoker", image: require("../../assets/Images/Valorant/roles/controller.png") },
        { name: "Sentinelle", image: require("../../assets/Images/Valorant/roles/sentinel.png") },
    ];
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                            <Text style={styles.textDescription}>
                                Selectionne un jeu que tu veux ajouter a ta collection !
                            </Text>
                        </View>
                        <View style={styles.partieJeu}>
                            <View style={styles.rechercheJeu}>
                                <TextInput
                                    style={styles.textInputRecherche}
                                    placeholder="Rechercher un jeu"
                                    placeholderTextColor={"#414141"}
                                ></TextInput>
                            </View>
                            <ScrollView style={styles.ligneJeu}>

                                {games.map((game) => (
                                    <View key={game.id} style={styles.gameItem}>
                                        <TouchableOpacity
                                            style={styles.gameItem}
                                            onPress={() => setIsModalVisible(true)}
                                        >
                                            <Image source={game.image} style={styles.gameImage} />
                                            <Text style={styles.gameName}>{game.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                    <Modal
                        visible={isModalVisible}
                        onRequestClose={() => setIsModalVisible(false)}
                        animationType="slide"
                        presentationStyle="pageSheet"
                        transparent={true}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.bottomSheetContent}>
                                <View style={styles.sheetIconPart}>
                                    <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                        <AntDesign name="closecircleo" size={24} color="white" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.bottomSheetText}>Détails du jeu</Text>
                                <View style={styles.checkboxContainer}>
                                    <Text style={styles.label}>Autoriser le cross-play</Text>
                                    <Switch
                                        trackColor={{ false: '#767577', true: '#ff286a' }}
                                        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                                <Text style={styles.sectionTitle}>Choisir la plateforme</Text>
                                <View style={styles.platformContainer}>
                                    {platforms.map((platform) => (
                                        <TouchableOpacity
                                            key={platform}
                                            style={[
                                                styles.platformButton,
                                                selectedPlatform === platform && styles.selectedButton,
                                            ]}
                                            onPress={() => setSelectedPlatform(platform)}
                                        >
                                            <Text style={styles.platformText}>{platform}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <Text style={styles.sectionTitle}>Choisir le rang</Text>
                                <ScrollView horizontal style={styles.rankContainer}>
                                    {ranks.map((rank) => (
                                        <TouchableOpacity
                                            key={rank.name}
                                            style={[
                                                styles.rankButton,
                                                selectedRank === rank.name && styles.selectedButton,
                                            ]}
                                            onPress={() => setSelectedRank(rank.name)}
                                        >
                                            <Image source={rank.image} style={styles.rankImage} />
                                            <Text style={styles.rankText}>{rank.name}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                                <Text style={styles.sectionTitle}>Choisir le rôle</Text>
                                <View style={styles.roleContainer}>
                                    {roles.map((role) => (
                                        <TouchableOpacity
                                            key={role.name}
                                            style={[
                                                styles.roleButton,
                                                selectedRole === role.name && styles.selectedButton,
                                            ]}
                                            onPress={() => setSelectedRole(role.name)}
                                        >
                                            <Image source={role.image} style={styles.roleImage} />
                                            <Text style={styles.roleText}>{role.name}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={styles.confirmSheet}>
                                    <TouchableOpacity style={styles.cancelButton}>
                                        <Text style={styles.confirmText}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.confirmButton}>
                                        <Text style={styles.confirmText}>Confirmer</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </Modal>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#262626",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
    },
    contenu: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
        marginTop: 100,
        width: "100%",
    },
    textAdd: {
        marginTop: 50,
        flexDirection: "column",
    },
    textenDeux: {
        flexDirection: "row",
        gap: 6,
    },
    textun: {
        color: "#ff286a",
        fontSize: 30,
        fontFamily: "Amaranth-Bold",
    },
    textdeux: {
        color: "white",
        fontSize: 30,
        fontFamily: "Amaranth-Bold",
    },
    descriptionTextAdd: {
        marginTop: 20,
    },
    textDescription: {
        color: "grey",
        fontSize: 14,
    },
    partieJeu: {
        marginTop: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    rechercheJeu: {
        borderWidth: 4,
        borderColor: "#ff286a",
        width: 300,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    textInputRecherche: {
        color: "white",
        fontSize: 20,
        fontFamily: "Amaranth-Bold",
    },

    ligneJeu: {
        marginTop: 20,
        width: "100%",
    },
    gameItem: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        marginLeft: 20,
    },
    gameImage: {
        width: 120,
        height: 200,
        borderRadius: 10,
        resizeMode: "cover",
    },
    gameName: {
        color: "white",
        fontSize: 20,
        marginLeft: 10,
        fontFamily: "Amaranth-Bold",
    }, modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',

    },
    bottomSheetContent: {
        backgroundColor: '#313131',
        padding: 16,
        height: '70%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    sheetIconPart: {
        alignItems: 'flex-end',
    },
    bottomSheetText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontFamily: 'Amaranth-Bold',
        marginBottom
            : 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    label: {
        margin: 8,
        color: 'white',
        fontFamily: 'Amaranth',
    },
    sectionTitle: {
        fontSize: 18,

        fontFamily: 'Amaranth-Bold',
        color: 'white',
        marginBottom: 10,
    },
    platformContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    platformButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#414141',
    },
    selectedButton: {
        backgroundColor: '#ff286a',
    },
    platformText: {
        color: 'white',
        fontFamily: 'Amaranth',
    },
    rankContainer: {
        maxHeight: 60,
        marginBottom: 20,

    },
    rankButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#414141',
        marginHorizontal: 5,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    rankText: {
        color: 'white',
        fontFamily: 'Amaranth',
    },
    rankImage: {
        width: 30,
        height: 30,

    },
    roleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    roleButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#414141',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    roleText: {
        color: 'white',
        fontFamily: 'Amaranth',
    },
    roleImage: {
        width: 25,
        height: 25,
    },
    confirmSheet: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 60,
        width: '100%',
    },
    cancelButton: {
        backgroundColor: '#414141',
        padding: 10,
        borderRadius: 10,
        width: 75,
        alignItems: 'center',
    },
    confirmButton: {
        backgroundColor: '#ff286a',
        padding: 10,
        borderRadius: 10,
    },
    confirmText: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
    },


});
