import { TextStyle, ViewStyle } from "react-native";
import React from "react";

export interface VndProps {
  value: number | string;
  unit: string;
  style?: TextStyle;
  unitStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

export declare const Vnd: React.FC<VndProps>;
