import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Button, Alert, StyleSheet } from "react-native";
import * as Contacts from 'expo-contacts';

const ContactsComponent = () => {
    const laodContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync()

        if(status !== 'granted') {
            
        }
    }
}