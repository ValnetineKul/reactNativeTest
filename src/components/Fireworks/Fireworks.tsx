import React, { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Easing, View } from "react-native";
import { COLOR_ERROR, COLOR_SUCCESS, COLOR_TEXT_BLUE } from "../../theme";
import { styles } from "./Fireworks.styles";
import { speedHelper, getRandom, getRandomColors } from "./Fireworks.helpers";

type FireworksProps = {
  height?: number;
  width?: number;
  iterations?: number;
  density?: number;
  speed?: 1 | 2 | 3;
  colors?: string[];
  circular?: boolean;
  numOfPieces?: number;
};

export const Fireworks = ({
  height = Dimensions.get("window").height,
  width = Dimensions.get("window").width,
  iterations = 5,
  density: densityProp = 10,
  speed = 2,
  colors = [COLOR_ERROR, COLOR_SUCCESS, COLOR_TEXT_BLUE],
  numOfPieces = 10,
}: FireworksProps) => {
  const [coordinates, setCoordinates] = useState<{ x: number[]; y: number[] }>({
    x: [],
    y: [],
  });
  const [density, setDensity] = useState(densityProp);
  const count = useRef(0);

  const opacityAnimationValue = useRef(new Animated.Value(0)).current;
  const movingBallAnimationValue = useRef(new Animated.Value(0)).current;

  const animateOpacity = useCallback(() => {
    Animated.sequence([
      Animated.timing(opacityAnimationValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimationValue, {
        toValue: 1,
        duration: speedHelper[speed],
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => setExplosionSpots(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opacityAnimationValue, speed]);

  const animateBall = useCallback(() => {
    Animated.sequence([
      Animated.timing(movingBallAnimationValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(movingBallAnimationValue, {
        toValue: 1,
        duration: speedHelper[speed],
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  }, [movingBallAnimationValue, speed]);

  const setExplosionSpots = useCallback(
    (shouldUpdateCounts?: boolean) => {
      if (density && density > 0) {
        if (density > 10) {
          setDensity(10);
        }
      } else {
        setDensity(10);
      }
      const generatedX = [];
      const generatedY = [];
      for (let i = 0; i < density; i++) {
        generatedX[i] = getRandom(height);
        generatedY[i] = getRandom(width);
      }
      setCoordinates({
        x: generatedX,
        y: generatedY,
      });
      if (iterations !== -1) {
        if (shouldUpdateCounts) {
          count.current++;
        }
        if (count.current < iterations) {
          animateOpacity();
          animateBall();
        }
      } else {
        animateOpacity();
        animateBall();
      }
    },
    [animateBall, animateOpacity, density, height, iterations, width]
  );

  const explosionBox = () => {
    let ballsCount = 0;
    const randomTops: Animated.AnimatedInterpolation<number>[] = [];
    const randomLefts: Animated.AnimatedInterpolation<number>[] = [];
    const loopCount = numOfPieces;

    for (let i = 0; i <= loopCount; i++) {
      ballsCount++;
      randomTops[i] = movingBallAnimationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [100, getRandom(200)],
      });
      randomLefts[i] = movingBallAnimationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [100, getRandom(200)],
      });
    }
    let ballOpacity = opacityAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    if (!iterations || count.current < iterations - 1) {
      return (
        <View style={styles.explosionBoundary}>
          {new Array(ballsCount).fill("").map((_, index) => {
            return (
              <Animated.View
                key={index}
                style={[
                  styles.ball,
                  {
                    height: 7,
                    width: 7,
                    borderRadius: 3,
                    transform: [
                      { translateX: randomLefts[index] },
                      { translateY: randomTops[index] },
                    ],
                    // top: randomTops[index],
                    // left: randomLefts[index],
                    opacity: ballOpacity,
                    backgroundColor: getRandomColors(colors),
                  },
                ]}
              />
            );
          })}
        </View>
      );
    }
    return null;
  };

  useEffect(() => {
    setExplosionSpots(true);
  }, [setExplosionSpots]);

  useEffect(() => {
    return () => {
      count.current = 0;
    };
  }, []);

  if (!iterations || count.current < iterations) {
    return (
      <View style={styles.container}>
        {coordinates.x.map((xItem, index) => {
          return (
            <View
              key={index}
              style={{
                top: coordinates.y[index],
                left: coordinates.x[index],
              }}
            >
              {explosionBox()}
            </View>
          );
        })}
      </View>
    );
  }
  return null;
};
