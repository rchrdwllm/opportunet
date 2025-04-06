import Text from "@/components/text";
import { useRouter } from "expo-router";
import { Search } from "lucide-react-native";
import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Input from "./input";

const Header = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text variant="heading" fontWeight="700">
          OpportuNet
        </Text>
        <Pressable onPress={() => router.push("/profile")}>
          <Image
            source={{
              uri: "https://img.icons8.com/?size=100&id=15265&format=png&color=000000",
            }}
            style={styles.profileIcon}
          />
        </Pressable>
      </View>
      <Input
        Icon={Search}
        placeholder="Search"
        containerStyle={styles.input}
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 20,
    paddingTop: 48,
    gap: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  input: {
    backgroundColor: "#FDFDFD",
  },
});

export default Header;
