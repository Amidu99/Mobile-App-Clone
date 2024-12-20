import {Stack} from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{headerShown: false}}
      />
      <Stack.Screen name="home"
        options={{headerShown: false}}
      />
      <Stack.Screen name="NoteCard"
        options={{headerShown: false}}
      />
      <Stack.Screen name="GoogleSignIn"
        options={{headerShown: false}}
      />
      <Stack.Screen name="TaskList"
        options={{headerShown: false}}
      />
    </Stack>
  );
}
