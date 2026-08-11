import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Button, Alert, StyleSheet } from "react-native";
import * as Contacts from 'expo-contacts';
import { FontAwesome } from "@expo/vector-icons";

const ContactsComponent = () => {
    const laodContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync()

        if(status !== 'granted') {
            Alert.alert('Permissão Negada', 'Permissão para acessar contatos foi negada.');
            return;
        }

        try{
            const{ data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
            });

            if (data.length > 0 ){
                setContacts(data);
            }else {
                Alert.alert('Sem contatos', 'nunhum contato encontrado.');
            }
        } catch (erro) {
            Alert.alert('Erro', 'Ocorreu um erro ao carregar os contatos.');
            console.error(error);
        }
    };

    useEffect(() => {
        laodContacts();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.constactItem}>
            <Text style={styles.contactName}>
                {item.firstName} {item.lastName}
            </Text>

        {item.phoneNumbers && item.phoneNumbers.map((phone, index) => (
            <View key={index} style={styles.contactDetailContainer}>
                <FontAwesome name="phone" size={16} color="#555" style={styles.icon} />
                <Text style={styles.contactDetail}>{phone.number}</Text>
            </View>
        ))}

        {item.emails && item.emails.map((emails, index) => (
            <View key={index} style={styles.contactDetailContainer}>
                <FontAwesome name="envelope" size={16} color="#555" style={styles.icon} />
                <Text style={styles.contactDetail}>{email.email}</Text>
            </View>
        ))}

        </View>
    );

    return (
        <View style={styles.container}>
            <Button title="Recarregar Contatos" onPress={laodContacts} />

            <FlatList 
                data={Contacts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',

    },
    list: {
        marginTop: 20,
    },
    contactItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: #eee,
    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    contactDetail: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    contactDetailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    icon: {
        marginRight: 10,
    },
});

export default ContactsComponent;