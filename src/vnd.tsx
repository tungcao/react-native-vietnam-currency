// src/vnd.tsx
import React from "react";
import { Text, View, TextStyle, ViewStyle } from "react-native";

export interface VndProps {
  value: number | string;
  unit: string;
  style?: TextStyle;
  unitStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const Vnd: React.FC<VndProps> = ({
  value,
  unit = "đ",
  style,
  unitStyle,
  containerStyle,
}) => {
  return (
    <View
      style={[{ flexDirection: "row", alignItems: "flex-end" }, containerStyle]}
    >
      <Text style={style}>{value.toLocaleString("vi-VN")}</Text>
      <Text style={[{ fontSize: 10, marginLeft: 2 }, unitStyle]}>{unit}</Text>
    </View>
  );
};

export default Vnd;
