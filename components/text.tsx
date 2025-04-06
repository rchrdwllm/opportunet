import React, { ReactNode, useMemo } from "react";
import { Text as RNText, StyleSheet } from "react-native";

type TextProps = {
  children: ReactNode;
  style?: object;
  fontWeight?: "400" | "500" | "600" | "700";
  variant?: "heading" | "subheading" | "body";
};

const Text = ({
  children,
  style,
  fontWeight = "400",
  variant = "body",
}: TextProps) => {
  const fontWeightStyle = useMemo(() => {
    switch (fontWeight) {
      case "400":
        return { fontFamily: "Geist_400Regular" };
      case "500":
        return { fontFamily: "Geist_500Medium" };
      case "600":
        return { fontFamily: "Geist_600SemiBold" };
      case "700":
        return { fontFamily: "Geist_700Bold" };
      default:
        return { fontFamily: "Geist_400Regular" };
    }
  }, [fontWeight]);

  return (
    <RNText style={[styles.text, styles[variant], style, fontWeightStyle]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Geist_400Regular",
    color: "#181D27",
  },
  heading: {
    fontSize: 28,
    fontFamily: "Geist_700Bold",
    color: "#181D27",
  },
  subheading: {
    fontSize: 14,
    fontFamily: "Geist_400Regular",
    color: "#8B8D92",
  },
  body: {
    fontSize: 14,
    fontFamily: "Geist_400Regular",
    color: "#181D27",
  },
});

export default Text;
