import React from "react";
import { Link, Stack, router } from "expo-router";
import { Button, Image, Pressable, Text, View } from "react-native";

const LogoTitle: React.FC = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
};

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          headerTitle: (props) => <LogoTitle />,
          headerRight: () => (
            <Button onPress={() => router.push("/modal")} title="Open Modal" />
          ),
        }}
      />
      <Text>Home Screen</Text>
      <View style={{ margin: 20 }}>
        <Text style={{ marginBottom: 10, textAlign: "center" }}>Routes</Text>
        <Link
          href={{ pathname: "settings", params: { name: "Bacon" } } as any}
          style={{ color: "blue" }}
        >
          Go to Settings
        </Link>
        <Link href="/about" style={{ color: "blue" }}>
          <Text>Go to About</Text>
        </Link>
        <Link href="/feed" style={{ color: "blue" }}>
          <Text>Go to Feed</Text>
        </Link>
        <Link href="/tv" style={{ color: "blue" }}>
          <Text>Go to TV</Text>
        </Link>
        <Link href="/expo" style={{ color: "blue" }}>
          <Text>Go to Expo</Text>
        </Link>
        <Link href="/evanbacon" style={{ color: "blue" }}>
          <Text>Go to EvanBacon</Text>
        </Link>
        <Link href="/user/bacon" style={{ color: "blue" }}>
          <Text>View user {">"} bacon</Text>
        </Link>
        <Link href="/user/vegan" style={{ color: "blue" }}>
          <Text>View user {">"} vegan</Text>
        </Link>
        <Link href="/user/other" asChild>
          <Pressable>
            <Text style={{ color: "blue" }}>View user {">"} other</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
