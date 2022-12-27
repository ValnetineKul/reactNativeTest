import React, { useEffect, useRef } from "react";
import { Animated, RegisteredStyle, ViewStyle } from "react-native";
import { styles } from "./Loader.styles";
import { getDotMargin } from "./Loader.helpers";

type LoaderProps = {
  fullScreen?: boolean;
  style?:
    | false
    | Animated.Value
    | Animated.AnimatedInterpolation<string | number>
    | RegisteredStyle<ViewStyle>
    | Animated.WithAnimatedObject<ViewStyle>;
};

export const Loader = ({ fullScreen, style }: LoaderProps) => {
  const bounceAnimation = useRef({
    1: new Animated.Value(0),
    2: new Animated.Value(0),
    3: new Animated.Value(0),
  }).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(bounceAnimation[1], {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(bounceAnimation[1], {
            toValue: 2,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(bounceAnimation[2], {
            delay: 250,
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(bounceAnimation[2], {
            delay: 125,
            toValue: 2,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(bounceAnimation[3], {
            delay: 500,
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(bounceAnimation[3], {
            delay: 65,
            toValue: 2,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, [bounceAnimation]);

  const rotateInterpolateRanges = {
    inputRange: [0, 1, 2],
    outputRange: [0, -8, 0],
  };
  return (
    <Animated.View
      style={[
        styles.loaderContainer,
        { ...(fullScreen && styles.fullScreenContainer) },
        style,
      ]}
    >
      {new Array(3).fill("").map((_, index) => {
        return (
          <Animated.View
            key={index}
            style={[
              styles.loaderDot,
              { ...(fullScreen && styles.fullScreenDot) },
              // eslint-disable-next-line react-native/no-inline-styles
              {
                transform: [
                  {
                    // @ts-expect-error: will not overshoot
                    translateY: bounceAnimation[index + 1].interpolate(
                      rotateInterpolateRanges
                    ),
                  },
                  {
                    scale: fullScreen ? 3 : 1,
                  },
                ],
                marginLeft: getDotMargin(index, fullScreen),
              },
            ]}
          />
        );
      })}
    </Animated.View>
  );
};
