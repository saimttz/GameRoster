import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import Post from '../components/Post'; // Import the Post component

export default function HomeScreen({ navigation }) {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isIconPressed, setIsIconPressed] = useState(false);

  const [games, setGames] = useState([
    require('../../assets/Images/pochetteJeu/jeu0.jpg'),
    require('../../assets/Images/pochetteJeu/jeu1.jpg'),
    require('../../assets/Images/pochetteJeu/jeu2.jpg'),
    require('../../assets/Images/pochetteJeu/jeu3.jpg'),
  ]);

  const posts = [
    {
      id: 1,
      avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg',
      username: 'saimttz',
      timestamp: '2 hours ago',
      title: '5 stack valorant',
      description: 'Salut je cherche 4 personne pour faire un 5 stack valorant.',
      hashtags: ['5Stack', 'RoadToImmo', 'PC', '+15'],
      gameName: 'Valorant',
    },
    {
      id: 2,
      avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg',
      username: 'User2',
      timestamp: '1 day ago',
      title: 'Second Post',
      description: 'This is the description of the second post.',
      hashtags: ['Programming', 'Tech', 'Mobile'],
      gameName: 'Rainbow Six Siege',
    },
  ];

  const addGame = () => {
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
        <StatusBar translucent={true} />
        <View style={styles.textLogo}>
          <Text style={styles.textGame}>Game</Text>
          <Text style={styles.textRoster}>Roster</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.contenu}>
            <View style={styles.choixJeu}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={toggleIconColor} style={styles.globalIcon}>
                  {/* ...existing code... */}
                </TouchableOpacity>
                {games.map((game, index) => (
                  <TouchableOpacity key={index} onPress={() => selectGame(index)}>
                    <Image source={game} style={[styles.gameImage, selectedGame === index && styles.selectedGameImage]} />
                  </TouchableOpacity>
                ))}
                <TouchableOpacity onPress={navigateToAddGame} style={styles.addGame}>
                  <Image source={require('../../assets/Images/pochetteJeu/jeu-1.jpg')} style={[styles.gameImage]} />
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View style={styles.separator} />
            <Text style={styles.sectionTitle}>Vos jeux</Text>
            <View style={styles.postsContainer}>
              {posts.map(post => (
                <Post key={post.id} post={post} />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  textLogo: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 20,
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
  contenu: {
    justifyContent: 'top',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
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
  separator: {
    width: '90%',
    height: 1,
    backgroundColor: '#ff286a',
    marginVertical: 20,
  },
  sectionTitle: {
    color: '#ff286a', // Pink color for section titles
    fontSize: 20,
    fontFamily: 'Amaranth-Bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
  postsContainer: {
    width: '100%',
    alignItems: 'center',
  },
});



