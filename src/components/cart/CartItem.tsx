import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";
import { AppFonts } from "../../styles/fonts";
import {AntDesign,FontAwesome} from "@expo/vector-icons";

const tempItem = {
  id: 1,
  price: 1199,
  title: "iPhone 16 Pro Max",
  imageURL:
    "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg",
};

const CartItem = () => {
  return (
    <View style={styles.container}>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: tempItem.imageURL,
          }}
          style={styles.image}
        />
      </View>

      {/* Details Container */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>{tempItem.title}</AppText>
        <AppText style={styles.textPrice}> {tempItem.price}</AppText>

        <View style={styles.qtyContainer}>
          <Pressable style={styles.iconButton}>
            <FontAwesome name="plus" size={s(14)} color={AppColors.primary} />
          </Pressable>
          <AppText style={styles.txtQty}>1</AppText>
          <Pressable style={styles.iconButton}>
            <FontAwesome name="minus" size={s(14)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>

      {/* Delete Container */}
      <View style={styles.deleteContainer}>
        <Pressable style={styles.deleteButton}>
          <AntDesign name="delete" size={s(14)} color={AppColors.red} />
          <AppText style={styles.textDelete}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: vs(4),
    borderColor: AppColors.borderColor,
  },
  image: { height: s(80), width: s(80), borderRadius: s(5) },
  imageContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 3.5,
  },
  deleteContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingEnd: s(12),
  },
  textTitle: {
    fontSize: s(14),
    color: AppColors.primary,
    fontFamily: AppFonts.Medium,
    marginTop: vs(5),
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
    fontFamily: AppFonts.Bold,
    marginTop: vs(5),
  },
  textDelete: {
    fontSize: s(12),
    fontFamily: AppFonts.Medium,
    color: AppColors.medGray,
    marginTop: 3,
    marginLeft: 7,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: s(5),
    borderRadius: s(30),
    borderWidth: s(1),
    borderColor: AppColors.borderColor,
    width: s(80),
    paddingVertical: vs(5),
    marginTop: vs(8),
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.lightGray,
    padding: s(5),
    height: s(20),
    width: s(20),
    borderRadius: s(10),
  },
  txtQty: {
    flex: 1,
    textAlign: "center",
    color: AppColors.primary,
  },
});
