import { Stack } from "expo-router";

export default () => (
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen name="index" />
    <Stack.Screen
      name="modal"
      options={{
        // Set the presentation mode to modal for our modal route.
        presentation: "modal",
      }}
    />
  </Stack>
);
