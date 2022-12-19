import React, { ReactElement } from "react";
import { KeyboardTypeOptions, View, TextInput, ViewStyle } from "react-native";
import { styles } from "./Input.styles";

type InputProps = {
  onChange: (text: string) => void;
  value: string;
  startAdorment?: ReactElement;
  endAdorment?: ReactElement;
  keyboardType?: KeyboardTypeOptions;
  placeHolder?: string;
  style?: ViewStyle;
};

export const Input = ({
  placeHolder = "",
  onChange,
  value,
  startAdorment,
  endAdorment,
  keyboardType = "default",
  style,
}: InputProps) => {
  return (
    <View style={[styles.inputContainer, style]}>
      {startAdorment && <View style={styles.startAdorment}>{startAdorment}</View>}
      <TextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeHolder}
        keyboardType={keyboardType}
        style={styles.input}
      />
      {endAdorment}
    </View>
  );
};
