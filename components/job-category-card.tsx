import { colors } from "@/constants/colors";
import { JobCategory } from "@/types";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import Text from "./text";

const JobCategoryCard = ({
  id,
  color,
  Icon,
  name,
  description,
}: JobCategory) => {
  return (
    <Link
      href={`/job-category/${id}`}
      style={[
        styles.container,
        {
          backgroundColor: colors[color].bgColor,
          borderColor: colors[color].borderColor,
        },
      ]}
    >
      <View style={styles.innerContainer}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: colors[color].iconBgColor },
          ]}
        >
          <Icon size={24} color={colors[color].fgColor} />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[styles.title, { color: colors[color].fgColor }]}
            fontWeight="500"
          >
            {name}
          </Text>
          <Text
            style={[styles.description, { color: colors[color].mutedColor }]}
          >
            {description}{" "}
          </Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 16,
    borderRadius: 100,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
  },
});

export default JobCategoryCard;
