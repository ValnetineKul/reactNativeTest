import { Animated, Easing } from "react-native";
import { COLOR_ERROR, COLOR_TEXT_BLUE, COLOR_SUCCESS } from "../../theme";
import { Optionable, RequestStatus } from "../../types";
import { useEffect, useState } from "react";

type AnimationValuesProp = {
  opacityOfInnerButtonWrapper: Animated.Value;
  opacityOfLoader: Animated.Value;
  widthOfAnimatedButtonContainer: Animated.Value;
  colorOfButton: Animated.Value;
  buttonShakeAnimation: Animated.Value;
  crossLeft: Animated.Value;
  crossRight: Animated.Value;
  successFailText: Animated.Value;
};

type ReturnType = {
  initAnimation: () => Animated.CompositeAnimation;
  successAnimation: () => Animated.CompositeAnimation;
  failAnimation: () => Animated.CompositeAnimation;
  resetAnim: () => Animated.CompositeAnimation;
};

export const getAnimations = ({
  opacityOfInnerButtonWrapper,
  widthOfAnimatedButtonContainer,
  opacityOfLoader,
  colorOfButton,
  buttonShakeAnimation,
  crossLeft,
  crossRight,
  successFailText,
}: AnimationValuesProp): ReturnType => {
  const initAnimation = () => {
    return Animated.parallel([
      Animated.timing(opacityOfInnerButtonWrapper, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(widthOfAnimatedButtonContainer, {
        toValue: 1,
        duration: 350,
        useNativeDriver: false,
        easing: Easing.ease,
      }),
      Animated.timing(opacityOfLoader, {
        toValue: 1,
        duration: 250,
        delay: 250,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]);
  };

  const failAnimation = () => {
    return Animated.sequence([
      Animated.parallel([
        Animated.timing(colorOfButton, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(opacityOfLoader, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]),
      Animated.loop(
        Animated.sequence([
          Animated.timing(buttonShakeAnimation, {
            toValue: -3,
            duration: 50,
            useNativeDriver: false,
          }),
          Animated.timing(buttonShakeAnimation, {
            toValue: 3,
            duration: 50,
            useNativeDriver: false,
          }),
          Animated.timing(buttonShakeAnimation, {
            toValue: 0,
            duration: 50,
            useNativeDriver: false,
          }),
        ]),
        { iterations: 2 }
      ),
      Animated.parallel([
        Animated.timing(crossLeft, {
          delay: 125,
          toValue: 10,
          duration: 250,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(crossRight, {
          toValue: 10,
          duration: 250,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
      ]),
      Animated.timing(widthOfAnimatedButtonContainer, {
        toValue: 0,
        duration: 350,
        useNativeDriver: false,
        easing: Easing.ease,
      }),
      Animated.timing(successFailText, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]);
  };

  const resetAnim = () => {
    return Animated.parallel([
      Animated.timing(opacityOfInnerButtonWrapper, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(widthOfAnimatedButtonContainer, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(colorOfButton, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(opacityOfLoader, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(buttonShakeAnimation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(crossLeft, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(crossRight, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(successFailText, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]);
  };

  const successAnimation = () => {
    return Animated.sequence([
      Animated.parallel([
        Animated.timing(colorOfButton, {
          toValue: 2,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(opacityOfLoader, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]),
      Animated.loop(
        Animated.sequence([
          Animated.timing(buttonShakeAnimation, {
            toValue: -4,
            duration: 100,
            useNativeDriver: false,
          }),
          Animated.timing(buttonShakeAnimation, {
            toValue: 4,
            duration: 100,
            useNativeDriver: false,
          }),
          Animated.timing(buttonShakeAnimation, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false,
          }),
        ]),
        { iterations: 1 }
      ),
      Animated.parallel([
        Animated.timing(crossLeft, {
          delay: 125,
          toValue: 10,
          duration: 125,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(crossRight, {
          toValue: 10,
          duration: 125,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
      ]),
      Animated.timing(widthOfAnimatedButtonContainer, {
        toValue: 0,
        duration: 350,
        useNativeDriver: false,
        easing: Easing.ease,
      }),
      Animated.timing(successFailText, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]);
  };

  return {
    initAnimation,
    successAnimation,
    failAnimation,
    resetAnim,
  };
};

export const buttonColorInterpolationData = {
  inputRange: [0, 1, 2],
  outputRange: [COLOR_ERROR, COLOR_TEXT_BLUE, COLOR_SUCCESS],
};

export const buttonWidthInterpolationData = {
  inputRange: [0, 1],
  outputRange: ["100%", "15%"],
};

export const crossHeightInterpolationData = {
  inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  outputRange: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
};

export const crossSidePositionInterpolationData = {
  inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  outputRange: [10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
};
export const crossTopPositionInterpolationData = {
  inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  outputRange: [9.5, 9.5, 9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5],
};

export const tickHeightInterpolationData = {
  inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  outputRange: [0, 3, 4.8, 7.2, 9.6, 12, 14.4, 16.8, 19.2, 21.6, 24],
};

export const tickHeightInterpolationData2 = {
  inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  outputRange: [0, 1.2, 2.4, 3.6, 4.8, 6, 7.2, 8.4, 9.6, 10.8, 12],
};

export const tickSidePositionInterpolationData = {
  inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  outputRange: [21, 20.3, 19.6, 18.9, 18.2, 17.5, 16.8, 16.1, 15.4, 14.7, 14],
};

export const tickSidePositionInterpolationData2 = {
  inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  outputRange: [8.3, 8.6, 8.9, 9.2, 9.5, 9.8, 10.1, 10.3, 10.4, 10.7, 11],
};

export const tickTopPositionInterpolationData = {
  inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  outputRange: [29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9],
};

export const tickTopPositionInterpolationData2 = {
  inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  outputRange: [28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18],
};

export const useAnimationController = (
  animationValues: AnimationValuesProp,
  status?: RequestStatus,
  onFail?: () => void,
  onSuccess?: () => void
): ReturnType => {
  const { initAnimation, successAnimation, failAnimation, resetAnim } =
    getAnimations(animationValues);
  const [isAnimationInProgress, setAnimationInProgress] =
    useState<Optionable<boolean>>(false);

  useEffect(() => {
    if (!isAnimationInProgress) {
      if (status === RequestStatus.ERROR) {
        failAnimation().start(({ finished }) => {
          if (finished) {
            onFail?.();
          }
        });
      }
      if (status === RequestStatus.SUCCESS) {
        successAnimation().start(({ finished }) => {
          if (finished) {
            onSuccess?.();
          }
        });
      }
      if (status === RequestStatus.REQUEST) {
        setAnimationInProgress(true);
        initAnimation().start((finished) => {
          if (finished) {
            setAnimationInProgress(false);
          }
        });
      }
      if (status === RequestStatus.RESET) {
        resetAnim().start();
      }
    }
    // no need to check the animation funcs update
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, isAnimationInProgress, onFail, onSuccess]);

  return { initAnimation, successAnimation, failAnimation, resetAnim };
};
