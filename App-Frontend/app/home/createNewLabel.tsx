import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CreateNewLabel() {
    return (
        <View style={styles.container}>   
            <Text style={styles.text}>
                <Icon name="add" style={styles.icon}/> Create new label
            </Text>
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
        fontSize: 16,
        color: '#fff',
    },
    icon: {
        fontSize: 16,
        color: '#fff',
    }
});
