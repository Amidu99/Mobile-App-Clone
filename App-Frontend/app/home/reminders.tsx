import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Reminders() {
    return (
        <View style={styles.container}>
            <Icon name="notifications-none" size={80} color='#fff' />
            <Text style={styles.text}>Notes with upcoming reminders appear here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#101010',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: '#fff',
    },
});
