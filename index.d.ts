import React from "react";
import { TextStyle, ViewStyle } from "react-native";

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

export declare const Vnd: React.FC<VndProps>;
