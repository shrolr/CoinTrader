import React, { useState } from 'react'
import { Text } from 'react-native';
import { Coin } from '../models';
import { MarketStackNavProps } from '../Routes/VideoStackNavigator/MarketParamList';

export default function MarketScreen({ navigation }: MarketStackNavProps<"Market">) {

    const initPage = () => {
        fetchCoinStocks()
    }

    const fetchCoinStocks = () => {

    }

    const fetchUserFavorites = () => {

    }

    const searchCoin = (name:string) => {

    }

    const navigateCoinDetailsPage = (coin:Coin) => {

    }

    const addCoinToFavorites = ( coin:Coin) => {

    }

    const removeCoinFromFavorites = ( coin:Coin) => {

    }

    
    return (
        <Text>Makret </Text>
    )
}
