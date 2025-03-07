import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import Post from '../components/Post'; // Import the Post component

export default function ProfileScreen({ navigation }) {
    const posts = [
        {
            id: 1,
            avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg',
            username: 'User1',
            timestamp: '2 hours ago',
            title: 'First Post',
            description: 'This is the description of the first post.',
            hashtags: ['ReactNative', 'JavaScript', 'Coding'],
            gameName: 'Rainbow Six Siege',
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

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor="#ff286a" barStyle="light-content" />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.imageFondContainer}>
                        <Image style={styles.imageFondImg} source={require('../../assets/Images/backgroundImage/valo2.png')} transition={false} />
                        <LinearGradient
                            colors={['transparent', '#262626']}
                            style={styles.gradient}
                        />
                    </View>
                    <View style={styles.icons}>
                        <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
                            <MaterialIcons name="edit-square" size={30} color="#ff286a" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="settings" size={29} color="#ff286a" onPress={() => navigation.navigate('ProfileSetting')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profil}>
                        <View style={styles.photoProfile}>
                            <Image style={styles.photoProfileImg} source={require('../../assets/Images/Profile/pp/images.jpg')} />
                        </View>
                        <View style={styles.usernameProfile}>
                            <Text style={styles.usernameProfileText}>Username</Text>
                        </View>
                    </View>
                    <Text style={styles.sectionTitle}>Mes posts</Text>
                    <View style={styles.vosPosts}>
                        {posts.map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626",
        paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    imageFondContainer: {
        width: '100%',
        height: 300,
        marginTop: -20,
        zIndex: -1,
    },
    imageFondImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        opacity: 0.5,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
    },
    icons: {
        width: '24%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 20,
        zIndex: 1,
        marginTop: -280,
        marginBottom: 80,
    },
    profil: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 20, // Add margin to separate from posts
    },
    photoProfile: {
        width: 160,
        height: 160,
        borderRadius: 100,
        backgroundColor: '#ff286a',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    photoProfileImg: {
        width: 150,
        height: 150,
        borderRadius: 100,
        resizeMode: 'cover',
    },
    usernameProfile: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    usernameProfileText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Amaranth-Bold',
    },
    sectionTitle: {
        color: '#ff286a', // Pink color for section titles
        fontSize: 20,
        fontFamily: 'Amaranth-Bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
        marginLeft: '5%',
    },
    vosPosts: {
        width: '100%',
        alignItems: 'center',
    },
});


