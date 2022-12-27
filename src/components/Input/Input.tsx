import React, { ReactElement } from "react";
import { KeyboardTypeOptions, View, TextInput, ViewStyle } from "react-native";
import { Typography } from "../Typography";
import { styles } from "./Input.styles";

type InputProps = {
  onChange?: (text: string) => void;
  label?: string;
  value?: string;
  startAdorment?: ReactElement;
  endAdorment?: ReactElement;
  keyboardType?: KeyboardTypeOptions;
  placeHolder?: string;
  style?: ViewStyle | ViewStyle[];
  error?: string;
  type?: string;
};

export const Input = ({
  placeHolder = "",
  onChange,
  label,
  value,
  startAdorment,
  endAdorment,
  keyboardType = "default",
  error,
  style,
  type,
}: InputProps) => {
  return (
    <View style={[styles.inputContainer, { ...(error && styles.error) }, style]}>
      {startAdorment && <View style={styles.startAdorment}>{startAdorment}</View>}
      {label && (
        <View style={[styles.labelContainer]}>
          <Typography variant="caption">{label}</Typography>
        </View>
      )}
      <TextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeHolder}
        keyboardType={keyboardType}
        style={[styles.input, startAdorment && styles.inputStartAdormentPadding]}
        secureTextEntry={type === "password"}
      />
      {endAdorment}
      {!!error && (
        <Typography style={[styles.errorText]} variant="caption" color="error">
          {error}
        </Typography>
      )}
    </View>
  );
};
