import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { styles } from "./Carousel.styles";
import { COLOR_TEXT_BLUE, COLOR_TEXT_GRAY } from "../../theme";
import { Nullable } from "../../types";
import { createTranslateXInterpolation } from "./Carousel.helpers";
import { CarouselArrow } from "./components";

type CarouselProps = {
  genericImageText?: string[] | string;
  imagesUrls: string[];
  showArrows?: boolean;
};

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const WIDTH = Dimensions.get("window").width;

export const Carousel = ({
  imagesUrls,
  genericImageText,
  showArrows,
}: CarouselProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  const [scrollRef, setScrollRef] = useState<Nullable<ScrollView>>(null);

  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);

  useEffect(() => {
    scrollRef?.scrollTo({
      x: currentActiveIndex * WIDTH,
      animated: true,
    });
  }, [currentActiveIndex, scrollRef]);

  return (
    <View style={[styles.container]}>
      {showArrows && (
        <>
          {currentActiveIndex !== 0 && (
            <CarouselArrow
              style={[styles.arrowLeft]}
              onPress={() => setCurrentActiveIndex(currentActiveIndex - 1)}
            />
          )}
          {currentActiveIndex !== imagesUrls.length - 1 && (
            <CarouselArrow
              right
              style={[styles.arrowRight]}
              onPress={() => setCurrentActiveIndex(currentActiveIndex + 1)}
            />
          )}
        </>
      )}
      <View style={[styles.scrollContainer]}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const offset = event.nativeEvent.contentOffset;
            if (offset) {
              var page = Math.round(offset.x / WIDTH);
              if (currentActiveIndex !== page) {
                setCurrentActiveIndex(page);
              }
            }
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={1}
          ref={(ref) => setScrollRef(ref)}
        >
          {imagesUrls.map((image, imageIndex) => {
            return (
              <View
                style={[styles.imageContainer, { width: windowWidth }]}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card}>
                  {genericImageText && (
                    <View style={styles.textContainer}>
                      <Text style={styles.infoText}>{"Image - " + imageIndex}</Text>
                    </View>
                  )}
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorOuterContainer}>
          <Animated.View
            style={[
              styles.indicatorContainer,
              {
                transform: [
                  {
                    translateX: scrollX.interpolate(
                      // @ts-expect-error: cant extract ExtrapolateType
                      createTranslateXInterpolation(
                        imagesUrls.length || 0,
                        windowWidth
                      )
                    ),
                  },
                ],
              },
            ]}
          >
            {imagesUrls.map((_, imageIndex) => {
              const backgroundColor = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [COLOR_TEXT_GRAY, COLOR_TEXT_BLUE, COLOR_TEXT_GRAY],
                extrapolate: "clamp",
              });
              const scale = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 2),
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                  windowWidth * (imageIndex + 2),
                ],
                outputRange: [0.6, 0.8, 1, 0.8, 0.6],
                extrapolate: "clamp",
              });
              return (
                <AnimatedTouchableOpacity
                  key={imageIndex}
                  style={[
                    styles.normalDot,
                    { backgroundColor, transform: [{ scale }] },
                  ]}
                  onPress={() => setCurrentActiveIndex(imageIndex)}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
