import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, Modal, FlatList, Clipboard } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const messages = [
    { id: 1, username: 'User1', avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg', text: 'Salut, on commence à 20h ?', timestamp: '2 hours ago', isMine: false },
    { id: 2, username: 'User2', avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg', text: 'Oui, ça marche pour moi !', timestamp: '1 hour ago', isMine: false },
    { id: 3, username: 'Moi', avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg', text: 'Parfait, à plus tard !', timestamp: '30 minutes ago', isMine: true },
    // Ajoutez d'autres messages ici
];

const members = [
    { id: 1, username: 'User1', avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg' },
    { id: 2, username: 'User2', avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg' },
    { id: 3, username: 'Moi', avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg' },
    // Ajoutez d'autres membres ici
];

export default function ChatDetailScreen({ navigation }) {
    const [newMessage, setNewMessage] = useState('');
    const [modalUserVisible, setModalUserVisible] = useState(false);
    const [modalSettingVisible, setModalSettingVisible] = useState(false);
    const [chatMuted, setChatMuted] = useState(false);
    const [modalMessageVisible, setModalMessageVisible] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            // Ajouter le nouveau message à la liste des messages
            messages.push({
                id: messages.length + 1,
                username: 'Moi',
                avatar: 'https://www.ecranlarge.com/content/uploads/2021/10/demon-slayer-photo-1401925-630x380.jpg',
                text: newMessage,
                timestamp: 'Just now',
                isMine: true,
            });
            setNewMessage('');
            Keyboard.dismiss(); // Fermer le clavier
        }
    };

    const handleLongPressMessage = (message) => {
        setSelectedMessage(message);
        setModalMessageVisible(true);
    };

    const handleCopyMessage = () => {
        Clipboard.setString(selectedMessage.text);
        setModalMessageVisible(false);
    };

    const handleDeleteMessage = () => {
        const index = messages.findIndex(msg => msg.id === selectedMessage.id);
        if (index !== -1) {
            messages.splice(index, 1);
        }
        setModalMessageVisible(false);
    };

    const renderMemberItem = ({ item }) => (
        <View style={styles.memberItem}>
            <Image style={styles.memberAvatar} source={{ uri: item.avatar }} />
            <Text style={styles.memberUsername}>{item.username}</Text>
            <TouchableOpacity style={styles.kickButton}>
                <Text style={styles.kickButtonText}>Kick</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                <AntDesign name="arrowleft" size={24} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.channelName}>Valorant 5 Stack</Text>
                            <Text style={styles.gameName}>Valorant</Text>
                            <View style={styles.headerIcons}>
                                <TouchableOpacity style={styles.iconButton} onPress={() => setModalUserVisible(true)}>
                                    <Ionicons name="people" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconButton} onPress={() => setModalSettingVisible(true)}>
                                    <Entypo name="dots-three-vertical" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView contentContainerStyle={styles.scrollContainer}>
                            {messages.map(message => (

                                <View style={[styles.messageContainer, message.isMine && styles.myMessageContainer]}>
                                    {!message.isMine && <Image style={styles.avatar} source={{ uri: message.avatar }} />}
                                    <View style={[styles.messageContent, message.isMine && styles.myMessageContent]}>
                                        <Text style={styles.username}>{message.username}</Text>
                                        <TouchableOpacity key={message.id} onLongPress={() => handleLongPressMessage(message)}>
                                            <Text style={[styles.messageText, message.isMine && styles.myMessageText]}>{message.text}</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.timestamp}>{message.timestamp}</Text>
                                    </View>
                                    {message.isMine && <Image style={[styles.avatar, styles.myAvatar]} source={{ uri: message.avatar }} />}
                                </View>

                            ))}
                        </ScrollView>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Tapez votre message..."
                                placeholderTextColor="#b0b0b0"
                                value={newMessage}
                                onChangeText={setNewMessage}
                                editable={!chatMuted}
                            />
                            <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage} disabled={chatMuted}>
                                <Ionicons name="send" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>

                <Modal
                    animationType="slide"
                    transparent={true}
                    presentationStyle='pageSheet'
                    visible={modalUserVisible}
                    onRequestClose={() => setModalUserVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Membres</Text>
                            <FlatList
                                data={members}
                                renderItem={renderMemberItem}
                                keyExtractor={item => item.id.toString()}
                            />
                            <TouchableOpacity style={styles.closeButton} onPress={() => setModalUserVisible(false)}>
                                <Text style={styles.closeButtonText}>Fermer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    presentationStyle='pageSheet'
                    visible={modalSettingVisible}
                    onRequestClose={() => setModalSettingVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Paramètres du groupe</Text>
                            <TouchableOpacity style={styles.settingButton} onPress={() => setChatMuted(!chatMuted)}>
                                <Ionicons name={chatMuted ? "volume-mute" : "volume-high"} size={24} color="#ff286a" />
                                <Text style={styles.settingButtonText}>{chatMuted ? "Unmute Chat" : "Mute Chat"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.settingButton}>
                                <Ionicons name="exit" size={24} color="#ff286a" />
                                <Text style={styles.settingButtonText}>Leave Group</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.settingButton}>
                                <AntDesign name="exclamationcircle" size={24} color="#ff286a" />
                                <Text style={styles.settingButtonText}>Report Group</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.closeButton} onPress={() => setModalSettingVisible(false)}>
                                <Text style={styles.closeButtonText}>Fermer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    presentationStyle='pageSheet'
                    visible={modalMessageVisible}
                    onRequestClose={() => setModalMessageVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Options</Text>
                            <TouchableOpacity style={styles.settingButton} onPress={handleCopyMessage}>
                                <Ionicons name="copy" size={24} color="#ff286a" />
                                <Text style={styles.settingButtonText}>Copier</Text>
                            </TouchableOpacity>
                            {selectedMessage?.isMine && (
                                <TouchableOpacity style={styles.settingButton} onPress={handleDeleteMessage}>
                                    <Ionicons name="trash" size={24} color="#ff286a" />
                                    <Text style={styles.settingButtonText}>Supprimer</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={styles.closeButton} onPress={() => setModalMessageVisible(false)}>
                                <Text style={styles.closeButtonText}>Fermer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626",
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#414141',
    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 25,
    },
    channelName: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Amaranth-Bold',
    },
    gameName: {
        color: '#ff286a',
        fontSize: 18,
        fontFamily: 'Amaranth-Regular',
    },
    headerIcons: {
        flexDirection: 'row',
        position: 'absolute',
        right: 20,
        top: 20,
    },
    iconButton: {
        marginLeft: 15,
    },
    scrollContainer: {
        paddingVertical: 20,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 15,
    },
    myMessageContainer: {
        alignSelf: 'flex-end',
        flexDirection: 'row-reverse',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    myAvatar: {
        display: 'none',
    },
    messageContent: {
        flex: 1,
    },
    myMessageContent: {
        alignItems: 'flex-end',
    },
    username: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
        fontSize: 16,
    },
    messageText: {
        color: 'white',
        fontFamily: 'Amaranth-Regular',
        fontSize: 14,
        marginVertical: 5,
        backgroundColor: '#414141',
        padding: 10,
        borderRadius: 10,
    },
    myMessageText: {
        backgroundColor: '#ff286a',
    },
    timestamp: {
        color: '#b0b0b0',
        fontFamily: 'Amaranth-Regular',
        fontSize: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#414141',
        backgroundColor: '#262626',
    },
    input: {
        flex: 1,
        backgroundColor: '#414141',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        fontFamily: 'Amaranth-Regular',
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#ff286a',
        padding: 10,
        borderRadius: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '100%',
        backgroundColor: '#414141',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        maxHeight: '70%',
    },
    modalTitle: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Amaranth-Bold',
        marginBottom: 20,
    },
    memberItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    memberAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    memberUsername: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Amaranth-Regular',
        flex: 1,
    },
    kickButton: {
        backgroundColor: '#ff286a',
        padding: 5,
        borderRadius: 5,
    },
    kickButtonText: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
    },
    closeButton: {
        backgroundColor: '#ff286a',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    closeButtonText: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
        fontSize: 16,
    },
    settingButton: {
        backgroundColor: 'gray',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    settingButtonText: {
        color: 'white',
        fontFamily: 'Amaranth-Regular',
        fontSize: 16,
    },
});
