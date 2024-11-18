import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Trash() {
    return (
        <View style={styles.container}>
            <Icon name="delete-outline" size={80} color='#fff' />
            <Text style={styles.text}>No notes in Recycle Bin</Text>
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
