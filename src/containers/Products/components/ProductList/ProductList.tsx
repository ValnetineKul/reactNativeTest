import React from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ProductCard } from "../../../../components";
import { Product } from "../../../../types";
import { mockProduct } from "../../Products";
import { cardGap, styles } from "./ProductList.styles";

type ProductListProps = {
  products: Product[];
  color?: string;
  onProductClick: (id: string | number) => void;
};

export const ProductList = ({ products, onProductClick }: ProductListProps) => {
  return (
    <FlatList
      data={products}
      renderItem={(product) => {
        const { attributes, images, id } = product.item;
        return (
          <TouchableOpacity onPress={() => onProductClick(id)}>
            <ProductCard
              key={id}
              style={{
                marginLeft: product.index % 2 !== 0 ? cardGap : 0,
                ...styles.productCard,
              }}
              name={attributes.name}
              price={attributes.price}
              oldPrice={attributes.compare_at_price}
              imageSrc={images?.data[0] || mockProduct.imageSrc}
            />
          </TouchableOpacity>
        );
      }}
      numColumns={2}
      style={{ overflow: "visible" }}
    />
  );
};
