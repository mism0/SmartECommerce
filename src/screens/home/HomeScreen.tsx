import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import { AppFonts } from "../../styles/fonts";
import ProductCard from "../../components/cards/ProductCard";
import { products } from "../../data/products";
import { s, vs } from "react-native-size-matters";

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <ProductCard/> */}
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            imageURL={item.imageURL}
            title={item.title}
            price={item.price.toString()}
            onAddToCartPress={() => {}}
          />
        )}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom:vs(10)
        }}
        contentContainerStyle={{
          paddingHorizontal: s(10),
        }}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sample: {
    fontSize: 60,
    fontFamily: AppFonts.Bold,
  },
  sample2: {
    fontSize: 60,
    fontFamily: AppFonts.Medium,
  },
});
