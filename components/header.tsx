import Text from "@/components/text";
import { useRouter } from "expo-router";
import { CircleUserRound, Search } from "lucide-react-native";
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
          <CircleUserRound size={28} color={"#181D27"} />
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
  input: {
    backgroundColor: "#FDFDFD",
  },
});

export default Header;
