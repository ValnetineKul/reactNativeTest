import React from "react";
import { RefreshControl, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ProductCard } from "../../../../components";
import { Product } from "../../../../types";
import { mockProduct } from "../../Products";
import { styles } from "./ProductList.styles";

type ProductListProps = {
  products: Product[];
  color?: string;
  onProductClick: (id: string | number) => void;
  getProducts: () => void;
  isLoading: boolean;
};

export const ProductList = ({ products, onProductClick, getProducts, isLoading }: ProductListProps) => {
  return (
    <FlatList
      data={products}
      contentContainerStyle={[styles.bottomPadding]}
      renderItem={(product) => {
        const { attributes, images, id } = product.item;
        return (
          <TouchableOpacity onPress={() => onProductClick(id)}>
            <ProductCard
              key={id}
              style={[styles.productCard]}
              name={attributes.name}
              price={attributes.price}
              oldPrice={attributes.compare_at_price}
              imageSrc={images?.data[0] || mockProduct.imageSrc}
            />
          </TouchableOpacity>
        );
      }}
      numColumns={2}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getProducts} />}
    />
  );
};
