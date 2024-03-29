import React, { useEffect, useRef, useState } from "react";
import { Input, ProductCard, Typography } from "../../components";
import { styles } from "./Search.styles";
import { TextInput, TouchableOpacity, View } from "react-native";
import { SearchIcon } from "../../theme/icons";
import { FlatList } from "react-native-gesture-handler";
import { mockProduct } from "../Products";
import { Product, RequestStatus } from "../../types";
import { useRequestStatusContext } from "../../context";
import { URLNames } from "../../constants";
import { baseApi } from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const PAST_SEARCH_STORAGE_KEY = "pastSearch";
const MAX_PAST_SEARCHES_STORED = 20;

export const Search = () => {
  const navigation = useNavigation();
  const { updateRequestStatusCall, requestStatuses, dispatch } = useRequestStatusContext();
  const inputRef = useRef<TextInput>(null);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);

  const [shouldShowPastSearch, setShowPastSearch] = useState(false);
  const [pastSearches, setPastSearches] = useState<string[]>([]);

  const handleInputChange = (text: string) => {
    setShowPastSearch(true);
    setSearchInputValue(text);
  };

  const handleProductSearch = async (pastSearch?: string) => {
    if (updateRequestStatusCall) {
      setShowPastSearch(false);

      if (pastSearch) {
        setSearchInputValue(pastSearch);
      }

      const lowerCaseSearchValue = (pastSearch || searchInputValue)?.toLowerCase();
      const { data } = await updateRequestStatusCall(
        () =>
          baseApi.getProducts({
            "filter[name]": lowerCaseSearchValue,
          }),
        URLNames.products
      );

      setSearchedProducts(data.data);

      if (!pastSearch) {
        const rawPastSearches = await AsyncStorage.getItem(PAST_SEARCH_STORAGE_KEY);
        let updatedPastSearches: string[] = [];
        if (rawPastSearches) {
          updatedPastSearches = JSON.parse(rawPastSearches);

          if (updatedPastSearches.length >= MAX_PAST_SEARCHES_STORED) {
            updatedPastSearches.pop();
          }
        }

        if (updatedPastSearches.indexOf(lowerCaseSearchValue) === -1 && lowerCaseSearchValue.length) {
          updatedPastSearches.unshift(lowerCaseSearchValue);
        }

        await AsyncStorage.setItem(PAST_SEARCH_STORAGE_KEY, JSON.stringify(updatedPastSearches));

        setPastSearches(updatedPastSearches);
      }
    }
  };

  const deleteSearchItem = async (searchIndex: number) => {
    const rawPastSearches = await AsyncStorage.getItem(PAST_SEARCH_STORAGE_KEY);
    let updatedPastSearches: string[] = [];
    if (rawPastSearches) {
      updatedPastSearches = JSON.parse(rawPastSearches);
    }

    updatedPastSearches.splice(searchIndex, 1);
    setPastSearches(updatedPastSearches);

    await AsyncStorage.setItem(PAST_SEARCH_STORAGE_KEY, JSON.stringify(updatedPastSearches));
  };

  useEffect(() => {
    AsyncStorage.getItem(PAST_SEARCH_STORAGE_KEY).then((stringifiedPastSearches) => {
      if (stringifiedPastSearches) {
        try {
          setPastSearches(JSON.parse(stringifiedPastSearches));
        } catch (error) {
          console.log(error);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (inputRef) {
      setShowPastSearch(true);
      inputRef.current?.focus();
    }

    return () => {
      dispatch?.({
        type: URLNames.products,
        payload: {
          status: RequestStatus.RESET,
        },
      });
    };
  }, [dispatch]);
  return (
    <View style={[styles.searchContainer]}>
      <Input
        ref={inputRef}
        value={searchInputValue}
        onChange={handleInputChange}
        onStartAdormentPress={() => handleProductSearch()}
        startAdorment={<SearchIcon />}
        isLoading={requestStatuses?.[URLNames.products].status === RequestStatus.REQUEST}
      />
      {shouldShowPastSearch && (
        <View style={[styles.pastSearchesContainer]}>
          {pastSearches.map((pastSearch, index) => {
            const regexp = new RegExp(searchInputValue.toLocaleLowerCase(), "ig");
            if (pastSearch.match(regexp)) {
              return (
                <TouchableOpacity
                  style={[styles.pastSearchItem]}
                  key={pastSearch}
                  onPress={() => handleProductSearch(pastSearch)}
                >
                  <Typography>{pastSearch}</Typography>
                  <TouchableOpacity
                    onPress={() => {
                      deleteSearchItem(index);
                    }}
                    style={[styles.deleteButton]}
                  >
                    <Typography>delete</Typography>
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      )}
      <FlatList
        data={searchedProducts}
        renderItem={(product) => {
          const { attributes, id, images } = product.item;
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("main", {
                  screen: "main/product",
                  params: {
                    productId: id,
                  },
                });
              }}
              key={id}
            >
              <ProductCard
                name={attributes.name}
                price={attributes.price}
                oldPrice={attributes.compare_at_price}
                imageSrc={images?.data[0] || mockProduct.imageSrc}
                fullWidth
                style={[styles.productCard]}
              />
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={[styles.productsContainer]}
      />
    </View>
  );
};
