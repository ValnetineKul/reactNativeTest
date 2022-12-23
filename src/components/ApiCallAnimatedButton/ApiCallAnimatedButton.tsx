import React, { PropsWithChildren, useRef } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "../Button";
import { styles } from "./ApiCallAnimatedButton.styles";
import { Typography } from "../Typography";
import { Loader } from "../Loader";
import {
  buttonColorInterpolationData,
  buttonWidthInterpolationData,
  crossHeightInterpolationData,
  crossSidePositionInterpolationData,
  crossTopPositionInterpolationData,
  tickHeightInterpolationData,
  tickHeightInterpolationData2,
  tickSidePositionInterpolationData,
  tickSidePositionInterpolationData2,
  tickTopPositionInterpolationData,
  tickTopPositionInterpolationData2,
  useAnimationController,
} from "./ApiCallAnimatedButton.helpers";
import { RequestStatus } from "../../types";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

type ApiCallAnimatedButtonProps = {
  status?: RequestStatus;
  successText?: string;
  failText?: string;
  isLoading?: string;
  onSuccess?: () => void;
  onFail?: () => void;
} & ButtonProps;

export const ApiCallAnimatedButton = ({
  onPress,
  style,
  title,
  fullWidth,
  startAdorment,
  endAdorment,
  color = "blue",
  status,
  successText = "SUCCESS !!!",
  failText = "OOP, TRY AGAIN",
  disabled,
  onSuccess,
  onFail,
}: PropsWithChildren<ApiCallAnimatedButtonProps>) => {
  const animatedValues = useRef({
    opacityOfInnerButtonWrapper: new Animated.Value(1),
    opacityOfLoader: new Animated.Value(0),
    widthOfAnimatedButtonContainer: new Animated.Value(0),
    colorOfButton: new Animated.Value(1),
    buttonShakeAnimation: new Animated.Value(0),
    crossLeft: new Animated.Value(0),
    crossRight: new Animated.Value(0),
    successFailText: new Animated.Value(0),
  }).current;

  const {
    opacityOfInnerButtonWrapper,
    opacityOfLoader,
    widthOfAnimatedButtonContainer,
    colorOfButton,
    buttonShakeAnimation,
    crossLeft,
    crossRight,
    successFailText,
  } = animatedValues;
  useAnimationController(animatedValues, status, onFail, onSuccess);
  const isSuccess = status === RequestStatus.SUCCESS;

  const shakeButtonAnimatesStyles = isSuccess
    ? {
        transform: [{ translateY: buttonShakeAnimation }],
      }
    : {
        transform: [{ translateX: buttonShakeAnimation }],
      };

  return (
    <>
      <AnimatedTouchableOpacity
        style={[
          styles.button,
          styles[color],
          { ...(fullWidth && styles.fullWidth) },
          style,
          {
            width: widthOfAnimatedButtonContainer.interpolate(
              buttonWidthInterpolationData
            ),
            backgroundColor: colorOfButton.interpolate(buttonColorInterpolationData),
            ...shakeButtonAnimatesStyles,
          },
        ]}
        onPress={onPress}
        disabled={disabled}
      >
        <Animated.View
          style={[
            styles.flexProvider,
            {
              opacity: opacityOfInnerButtonWrapper,
            },
          ]}
        >
          {startAdorment && (
            <View style={styles.startAdorment}>{startAdorment}</View>
          )}
          <Typography variant="body1" color="white" style={styles.title}>
            {title}
          </Typography>
          {endAdorment && <View style={styles.endAdorment}>{endAdorment}</View>}
        </Animated.View>
        <Loader style={{ opacity: opacityOfLoader }} />
        <Animated.View
          style={[
            styles.successFailTextContainer,
            {
              opacity: successFailText,
            },
          ]}
        >
          <Typography style={[styles.successFailText]} color="white">
            {isSuccess ? successText : failText}
          </Typography>
        </Animated.View>
        <Animated.View style={[styles.crossContainer]}>
          <Animated.View
            style={[
              styles.crossLeft,
              {
                height: crossLeft.interpolate(
                  isSuccess
                    ? tickHeightInterpolationData
                    : crossHeightInterpolationData
                ),
                right: crossLeft.interpolate(
                  isSuccess
                    ? tickSidePositionInterpolationData
                    : crossSidePositionInterpolationData
                ),
                top: crossLeft.interpolate(
                  isSuccess
                    ? tickTopPositionInterpolationData
                    : crossTopPositionInterpolationData
                ),
              },
            ]}
          />
          <Animated.View
            style={[
              styles.crossRight,
              {
                height: crossRight.interpolate(
                  isSuccess
                    ? tickHeightInterpolationData2
                    : crossHeightInterpolationData
                ),
                left: crossRight.interpolate(
                  isSuccess
                    ? tickSidePositionInterpolationData2
                    : crossSidePositionInterpolationData
                ),
                top: crossRight.interpolate(
                  isSuccess
                    ? tickTopPositionInterpolationData2
                    : crossTopPositionInterpolationData
                ),
              },
            ]}
          />
        </Animated.View>
      </AnimatedTouchableOpacity>
    </>
  );
};
