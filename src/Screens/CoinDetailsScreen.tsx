import React, { useState } from 'react'
import { Text } from 'react-native';
import { Coin } from '../models';
import { MarketStackNavProps } from '../Routes/VideoStackNavigator/MarketParamList';

export default function CoinDetailsScreen({ navigation }: MarketStackNavProps<"Market">) {

    const initPage = () => {
        fetchCoinDetails()
        fetchCoinGraphics()
    }
    const fetchCoinDetails = () => {
    }

    const fetchCoinGraphics = () => {

    }
    const sellCoin = (coin:Coin,value:number) => {

    }

    const buyCoin = (coin:Coin,value:number) => {

    }
    const createBuyOrder = (coin:Coin,value:number) => {

    }

    const createSellORder = (coin:Coin,value:number) => {

    }
    const createBuyAlarm = (coin:Coin,value:number) => {

    }

    const createSellAlarm = (coin:Coin,value:number) => {

    }
    
    const addCoinToFavorites = ( coin:Coin) => {

    }

    const removeCoinFromFavorites = ( coin:Coin) => {

    }
    
    const fetchAlarmsForThisCoin = (coin:Coin) => {

    }

    
    return (
        <Text>Coin Detay Sayfası </Text>
    )
}
