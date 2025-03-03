import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableHighlight } from 'react-native';
import { SafeAreaProvider, SafeAreaProviderProps, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';


export default function HomeScreen({ navigation }) {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isIconPressed, setIsIconPressed] = useState(false);

  const [games, setGames] = useState([
    require('../../assets/Images/pochetteJeu/jeu0.jpg'),
    require('../../assets/Images/pochetteJeu/jeu1.jpg'),
    require('../../assets/Images/pochetteJeu/jeu2.jpg'),
    require('../../assets/Images/pochetteJeu/jeu3.jpg'),
  ]);
  const addGame = () => {
    // Ajoutez ici la logique pour ajouter une nouvelle image de jeu
    setGames([...games, require('../../assets/Images/pochetteJeu/jeu1.jpg')]);
  };

  const selectGame = (index) => {
    setSelectedGame(index);
  };
  const toggleIconColor = () => {
    setIsIconPressed(!isIconPressed);
  };
  const navigateToAddGame = () => {
    navigation.navigate('HomeAddGame');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.contenu}>
          <View style={styles.textLogo}>
            <Text style={styles.textGame}>Game</Text>
            <Text style={styles.textRoster}>Roster</Text>
          </View>
          <View style={styles.choixJeu}>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={toggleIconColor} style={styles.globalIcon}>

              </TouchableOpacity>
              {games.map((game, index) => (
                <TouchableOpacity key={index} onPress={() => selectGame(index)}>
                  <Image source={game} style={[styles.gameImage, selectedGame === index && styles.selectedGameImage,]} />
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={navigateToAddGame} style={styles.addGame}>
                <Image source={require('../../assets/Images/pochetteJeu/jeu-1.jpg')} style={[styles.gameImage]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

      </SafeAreaView>
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
    justifyContent: 'top',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  textLogo: {
    flexDirection: 'row',
    marginTop: 40,
    marginRight: 160,
  },
  textGame: {
    fontFamily: 'Airstream',
    color: 'white',
    fontSize: 35,
  },
  textRoster: {
    fontFamily: 'Airstream',
    color: '#ff286a',
    fontSize: 35,
  },
  choixJeu: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 20,
  },
  gameImage: {
    width: 50,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  selectedGameImage: {
    borderColor: '#ff286a',
    borderWidth: 2,
  },

});



