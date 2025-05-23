import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import EmptyCartScreen from './EmptyCartScreen'
import CartItem from '../../components/cart/CartItem'

const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader/>
      {/* <EmptyCartScreen/> */}
      <CartItem/>
    </AppSafeView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})