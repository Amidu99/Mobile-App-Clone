import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const Home: React.FC = () => {
    const [selectedNoteType, setSelectedNoteType] = useState<string | null>(null);
    const [showOptions, setShowOptions] = useState(false);
    const optionsAnim = useRef(new Animated.Value(0)).current;
    const rotateAnimation = useRef(new Animated.Value(0)).current;

    const router = useRouter();

    // Animate options when showOptions changes
    useEffect(() => {
        Animated.parallel([
            Animated.timing(optionsAnim, {
                toValue: showOptions ? 1 : 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.spring(rotateAnimation, {
                toValue: showOptions ? 1 : 0,
                useNativeDriver: true,
                tension: 40,
                friction: 7
            })
        ]).start();
    }, [showOptions]);

    const rotation = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg']
    });

    const handleAddNote = () => {
        setShowOptions(!showOptions);
    };

    const handleSelectNoteType = (type: string) => {

        switch (type) {
            case 'text':
                router.push({
                    pathname: '/NoteCard',
                    params: { type: 'text' }
                });
                break;
            case 'image':
                break;
            case 'drawing':
                break;
            case 'list':
                break;
            default:
                break
        }
        setSelectedNoteType(type);
        setShowOptions(false);
    };

    return (
        <ThemedView style={styles.container}>
            {/* Floating Action Button */}
            <TouchableOpacity
                onPress={handleAddNote}
                style={[styles.fab, showOptions && styles.fabActive]}
                activeOpacity={0.8}
            >
                <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                    <Icon name="add" size={30} color="#fff" />
                </Animated.View>
            </TouchableOpacity>

            {/* Animated Options Menu */}
            <Animated.View
                style={[
                    styles.optionMenu,
                    {
                        opacity: optionsAnim,
                        transform: [
                            { translateY: optionsAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [100, 0]
                                })}
                        ],
                        pointerEvents: showOptions ? 'auto' : 'none'
                    }
                ]}
            >
                <TouchableOpacity
                    onPress={() => handleSelectNoteType('image')}
                    style={styles.optionButton}
                >
                    <Text style={styles.optionText}>Image</Text>
                    <Icon name="image" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleSelectNoteType('drawing')}
                    style={styles.optionButton}
                >
                    <Text style={styles.optionText}>Drawing</Text>
                    <Icon name="brush" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleSelectNoteType('list')}
                    style={styles.optionButton}
                >
                    <Text style={styles.optionText}>List</Text>
                    <Icon name="check-box" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>
                        handleSelectNoteType('text')
                }
                    style={styles.optionButton}
                >
                    <Text style={styles.optionText}>Text</Text>
                    <Icon name="text-fields" size={24} color="#fff" />
                </TouchableOpacity>
            </Animated.View>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010",
    },
    optionText: {
        color: "#fff",
        fontSize: 16,
        marginRight: 10,
    },
    optionMenu: {
        position: "absolute",
        bottom: 100,
        right: 20,
        borderRadius: 10,
        zIndex: 10,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: "#4169E1",
        marginBottom: 10,
        borderRadius: 50,
        alignSelf: 'flex-start',
    },
    fab: {
        position: "absolute",
        right: 20,
        bottom: 30,
        backgroundColor: "#439CEF",
        borderRadius: 20,
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    fabActive: {
        backgroundColor: "#4169E1",
    }
});

export default Home;
