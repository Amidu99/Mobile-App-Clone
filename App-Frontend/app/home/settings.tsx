import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

export default function Setting() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Display options</Text>
            
            <View style={styles.row}>
                <Text style={styles.text}>Add new items to bottom</Text>
                <ToggleSwitch
                    isOn={false}
                    onColor="green"
                    offColor="gray"
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                />
            </View>
            
            <View style={styles.row}>
                <Text style={styles.text}>Move ticked items to bottom</Text>
                <ToggleSwitch
                    isOn={true}
                    onColor="#6ac5fe"
                    offColor="gray"
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                />
            </View>
            
            <View style={styles.row}>
                <Text style={styles.text}>Display rich link previews</Text>
                <ToggleSwitch
                    isOn={true}
                    onColor="#6ac5fe"
                    offColor="gray"
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                />
            </View>
            
            <View style={styles.row}>
                <Text style={styles.text}>Theme</Text>
                <Text style={styles.text}>System default</Text>
            </View>
            
            <Text style={styles.heading}>Reminder defaults</Text>
            <View style={styles.row}>
                <Text style={styles.text}>Morning</Text>
                <Text style={styles.text}>8.00 am</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Afternoon</Text>
                <Text style={styles.text}>1.00 pm</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Evening</Text>
                <Text style={styles.text}>6.00 pm</Text>
            </View>
            
            <Text style={styles.heading}>Sharing</Text>
            <View style={styles.row}>
                <Text style={styles.text}>Enable sharing</Text>
                <ToggleSwitch
                    isOn={true}
                    onColor="#6ac5fe"
                    offColor="gray"
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                />
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
        fontSize: 24,
        color: '#fff',
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
});
