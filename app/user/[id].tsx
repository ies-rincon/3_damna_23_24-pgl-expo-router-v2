import { Text, View } from "react-native";
import { usePathname } from "expo-router";
import { styles } from "../_styles";

export default function User() {
  const pathname = usePathname();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User: {pathname}</Text>
    </View>
  );
}
