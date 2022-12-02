import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { ProductCard } from "../../../../components";
import { Product } from "../../../../types";
import { mockProduct } from "../../Products";
import { cardGap, styles } from "./ProductList.styles";

type ProductListProps = {
  products: Product[];
  color?: string;
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <FlatList
      data={products}
      renderItem={(product) => {
        const { attributes, images } = product.item;
        return (
          <ProductCard
            style={{
              marginLeft: product.index % 2 !== 0 ? cardGap : 0,
              ...styles.productCard,
            }}
            name={attributes.name}
            price={attributes.price}
            oldPrice={attributes.compare_at_price}
            imageSrc={images?.data[0] || mockProduct.imageSrc}
          />
        );
      }}
      numColumns={2}
      key={2}
      style={{ overflow: "visible" }}
    />
  );
};
