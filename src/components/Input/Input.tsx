import React, { ReactElement, forwardRef, useEffect, useRef, useState } from "react";
import {
  KeyboardTypeOptions,
  View,
  TextInput,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Typography } from "../Typography";
import { styles } from "./Input.styles";
import {
  inputLabelPositionYAnimationInterpolation,
  inputLabelScaleAnimationInterpolation,
} from "./Input.helpers";
import { Loader } from "../Loader";

type InputProps = {
  onChange?: (text: string) => void;
  onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onStartAdormentPress?: () => void;
  label?: string;
  value?: string;
  startAdorment?: ReactElement;
  endAdorment?: ReactElement;
  keyboardType?: KeyboardTypeOptions;
  placeHolder?: string;
  style?: ViewStyle | ViewStyle[];
  error?: string;
  type?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      placeHolder = "",
      onChange,
      onBlur,
      onFocus,
      onStartAdormentPress,
      label,
      value,
      startAdorment,
      endAdorment,
      keyboardType = "default",
      error,
      style,
      type,
      disabled,
      isLoading,
    },
    ref
  ) => {
    const [isFocused, setFocused] = useState(false);
    const inputLabelAnimationValue = useRef(new Animated.Value(0)).current;

    const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur?.(event);
      setFocused(false);
    };

    const handleFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus?.(event);
      setFocused(true);
    };

    useEffect(() => {
      Animated.timing(inputLabelAnimationValue, {
        toValue: Number(isFocused) || Number(!!value?.length),
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, [inputLabelAnimationValue, isFocused, value?.length]);

    return (
      <View style={[styles.inputContainer, { ...(error && styles.error) }, style]}>
        {startAdorment && (
          <TouchableOpacity onPress={onStartAdormentPress} style={styles.startAdorment}>
            {startAdorment}
          </TouchableOpacity>
        )}
        {label && (
          <Animated.View
            style={[
              styles.labelContainer,
              {
                transform: [
                  {
                    translateY: inputLabelAnimationValue.interpolate(
                      inputLabelPositionYAnimationInterpolation
                    ),
                  },
                  {
                    scale: inputLabelAnimationValue.interpolate(inputLabelScaleAnimationInterpolation),
                  },
                ],
              },
            ]}
          >
            <Typography variant="caption">{label}</Typography>
          </Animated.View>
        )}
        <TextInput
          onChangeText={onChange}
          value={value}
          placeholder={placeHolder}
          keyboardType={keyboardType}
          style={[styles.input, startAdorment && styles.inputStartAdormentPadding]}
          secureTextEntry={type === "password"}
          onBlur={handleBlur}
          onFocus={handleFocus}
          editable={!disabled}
          selectTextOnFocus={!disabled}
          ref={ref}
        />
        {isLoading && <Loader style={[styles.loader]} color="blue" />}
        {endAdorment}
        {!!error && (
          <Typography style={[styles.errorText]} variant="caption" color="error">
            {error}
          </Typography>
        )}
      </View>
    );
  }
);
