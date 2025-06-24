import React, { useMemo } from "react";
import { Text, View, TextStyle, ViewStyle } from "react-native";

export enum SeparatorType {
  Dot = ".",
  Comma = ",",
}

export interface VndProps {
  value: number | string;
  unit?: string;
  style?: TextStyle;
  unitStyle?: TextStyle;
  containerStyle?: ViewStyle;
  separator?: SeparatorType;
}

const formatNumber = (value: number, separator: SeparatorType): string => {
  const raw = value.toString();
  return raw.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

const Vnd: React.FC<VndProps> = ({
  value,
  unit = "₫",
  style,
  unitStyle,
  containerStyle,
  separator = SeparatorType.Dot,
}) => {
  const formatted = useMemo(() => {
    const numeric =
      typeof value === "string"
        ? parseInt(value.replace(/\D/g, ""), 10)
        : value;

    if (isNaN(numeric)) return "0";
    return formatNumber(numeric, separator);
  }, [value, separator]);

  return (
    <View
      style={[{ flexDirection: "row", alignItems: "flex-end" }, containerStyle]}
    >
      <Text style={style}>{formatted}</Text>
      <Text style={[{ fontSize: 10, marginLeft: 2 }, unitStyle]}>{unit}</Text>
    </View>
  );
};

export default Vnd;
