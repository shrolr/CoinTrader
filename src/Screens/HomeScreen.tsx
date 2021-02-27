import React, { useState } from "react";
import { Text } from "react-native";
import { HomeStackNavProps } from "../Routes/HomeStackNavigator/HomeParamList";
import { Coin } from "../models";


function HomeScreen({ navigation }: HomeStackNavProps<"Home">) {

  const initHomePage = () => {
    FetchWalletDetails()
    FetchGraphics()
  }
  const FetchWalletDetails = () => {

  }

  const FetchGraphics = () => {

  }

  const compareCoins = () => {

  }

  const OrderBuy = (Coin:Coin,BuyValue:number) => {

  }

  const OrderSell = (Coin:Coin,SellValue:number) => {

  }

  const SwapCoins = (toSell:Coin,toBuy:Coin) => {

  }
 
  const createSellOrder = (Coin:Coin,BuyValue:number,Threshold:number) => {

  }
  const createBuyOrder = (Coin:Coin,BuyValue:number,Threshold:number) => {

  }
 

  return (
    <Text>Home</Text>
  )
}

export default HomeScreen;
