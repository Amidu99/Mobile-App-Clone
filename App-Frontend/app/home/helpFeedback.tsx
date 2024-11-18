import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HelpFeedback() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Popular help resources</Text>
            <View style={styles.row}>
                <Text style={styles.text}>Create a list with Gemini in Google Keep</Text>
                <Icon name="search" size={16} color='#fff' />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Label, color or pin notes</Text>
                <Icon name="search" size={16} color='#fff' />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>How to use Google Keep</Text>
                <Icon name="search" size={16} color='#fff' />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Fix problems with Google Keep</Text>
                <Icon name="search" size={16} color='#fff' />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Set up reminders for your notes</Text>
                <Icon name="search" size={16} color='#fff' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#101010',
        flex: 1,
        paddingInline: 24,
    },
    heading: {
        marginTop: 14,
        fontSize: 16,
        color: '#fff',
        fontWeight: 500
    },
    text: {
        marginTop: 8,
        fontSize: 14,
        color: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
});
