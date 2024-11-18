import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={({ route }) => ({
                    header: ({ navigation }) => {
                        // Customize header based on route
                        const getPlaceholder = () => {
                            switch (route.name) {
                                case 'homePage':
                                    return 'Search your notes';
                                case 'reminders':
                                    return 'Reminders';
                                case 'archive':
                                    return 'Archive';
                                case 'trash':
                                    return 'Deleted';
                                case 'createNewLabel':
                                    return 'Edit labels';
                                case 'settings':
                                    return 'Settings';
                                case 'helpFeedback':
                                    return 'Help';
                                default:
                                    return 'Search';
                            }
                        };

                        const getHeaderStyle = () => {
                            switch (route.name) {
                                case 'homePage':
                                    return '#23343F';
                                case 'reminders':
                                    return '#101010';
                                case 'archive':
                                    return '#101010';
                                case 'trash':
                                    return '#101010';
                                default:
                                    return '#101010';
                            }
                        };

                        return (
                            <View style={styles.headerContainer}>
                                <View style={[
                                    styles.searchBar,
                                    { backgroundColor: getHeaderStyle() }
                                ]}>
                                    <TouchableOpacity
                                        style={styles.iconButton}
                                        onPress={() => navigation.openDrawer()}
                                    >
                                        <Icon name="menu" size={30} color="#D8E0E5" />
                                    </TouchableOpacity>

                                    <TextInput
                                        placeholder={getPlaceholder()}
                                        placeholderTextColor="#D8E0E5"
                                        style={styles.searchInput}
                                    />

                                    {route.name === 'homePage' ? (
                                        <TouchableOpacity 
                                            style={styles.iconButton}
                                            onPress={() => router.push('../home/ProfileScreen')}
                                        
                                        >
                                            <Icon name="account-circle" size={30} color="#D8E0E5" />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity style={styles.iconButton}>
                                            <Icon name="search" size={24} color="#D8E0E5" />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>
                        );
                    },
                    drawerStyle: {
                        backgroundColor: '#252525',
                    },
                    drawerLabelStyle: {
                        marginLeft: 10,
                    },
                    drawerActiveTintColor: '#1a73e8',
                    drawerInactiveTintColor: '#fff',
                    drawerItemStyle: {
                        backgroundColor: '#252525',
                        borderRadius: 0,
                        marginVertical: 0,
                        marginHorizontal: 0,
                    },
                    pressColor: '#101010',
                    pressOpacity: 0.8
                })}
            >
                <Drawer.Screen
                    name="homePage"
                    options={{
                        drawerLabel: "Notes",
                        drawerIcon: ({ color, size }) => (
                            <Icon name="lightbulb-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="reminders"
                    options={{
                        drawerLabel: "Reminders",
                        drawerIcon: ({ color, size }) => (
                            <Icon name="notifications-none" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="createNewLabel"
                    options={{
                        drawerLabel: "Create new label",
                        drawerIcon: ({ color, size }) => (
                            <Icon name="add" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="archive"
                    options={{
                        drawerLabel: "Archive",
                        drawerIcon: ({ color, size }) => (
                            <Icon name="archive" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="trash"
                    options={{
                        drawerLabel: "Deleted",
                        drawerIcon: ({ color, size }) => (
                            <Icon name="delete-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="settings"
                    options={{
                        drawerLabel: "Settings",
                        drawerIcon: ({ color, size }) => (
                            <Icon name="settings" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="helpFeedback"
                    options={{
                        drawerLabel: "Help & feedback",
                        drawerIcon: ({ color, size }) => (
                            <Icon name="help-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="ProfileScreen"
                    options={{
                        drawerLabel: "",
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#101010',
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        justifyContent: "space-between",
        borderRadius: 35,
    },
    iconButton: {
        padding: 10,
    },
    searchInput: {
        flex: 1,
        marginHorizontal: 10,
        fontSize: 16,
        color: '#D8E0E5',
    },
});
