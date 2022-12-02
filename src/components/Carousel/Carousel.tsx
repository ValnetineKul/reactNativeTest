import React, { useState, useRef } from "react";
import { View, Dimensions, ViewStyle } from "react-native";

import SnapCarousel from "react-native-snap-carousel-v4";

type CarouselProps = {
  slidesData: any[];
  renderItem: ({ item, index }: { item: any; index: number }) => JSX.Element | null;
  sliderWidth?: number;
  itemWidth?: number;
  itemHeight?: number;
  layout?: "default" | "stack" | "tinder";
  style?: ViewStyle;
};

export const Carousel = ({
  slidesData,
  renderItem,
  sliderWidth = Dimensions.get("window").width,
  itemWidth = Dimensions.get("window").width,
  itemHeight,
  layout,
  style,
}: CarouselProps) => {
  const [, setActiveIndex] = useState<number>(0);
  const ref = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        overflow: "visible",
        ...style,
      }}
    >
      <SnapCarousel
        layout={layout}
        ref={ref}
        data={slidesData}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        renderItem={renderItem}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        style={{ overflow: "visible" }}
      />
    </View>
  );
};
