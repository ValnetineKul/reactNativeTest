import React, { useCallback, useEffect, useState } from "react";
import { baseApi } from "../../api";
import { Card, Input, Loader } from "../../components";
import { SearchIcon } from "../../theme/icons";
import { Product } from "../../types";
import { ProductList } from "./components";
import { styles } from "./Product.styles";
import { MainStackProps } from "../../types/routes";

export const mockProduct = {
  id: 1,
  name: "Xiaomi Mi A3",
  price: "200",
  oldPrice: "250",
  currency: "$",
  discount: "20",
  imageSrc:
    // eslint-disable-next-line max-len
    "data:image/jpeg;base64,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",
};

export const Products = ({ navigation }: MainStackProps<"main/products">) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    setIsLoading(true);
    const { data } = await baseApi.getProducts({});
    setProducts(data.data);
    setIsLoading(false);
  };

  const handleProductClick = useCallback(
    (id: string | number) => {
      navigation?.navigate("main/product", { productId: String(id) });
    },
    [navigation]
  );

  const handleSearchInputPress = () => {
    navigation?.navigate("main/search");
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Card variant="horizontalFull" style={[styles.inputContainer]}>
        <Input startAdorment={<SearchIcon />} onFocus={handleSearchInputPress} />
      </Card>
      {isLoading ? (
        <Loader fullScreen />
      ) : (
        <ProductList
          products={products}
          onProductClick={handleProductClick}
          getProducts={getProducts}
          isLoading={isLoading}
        />
      )}
    </>
  );
};
