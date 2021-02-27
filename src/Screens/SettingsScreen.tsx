import { Icon } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, FlatList, Share, View, TouchableOpacity } from 'react-native'
import { Coin } from '../models'
import { Alarm } from '../models/Alarm'
import { SettingsStackNavProps } from '../Routes/SettingsStackNavigator/SettingsParamList'


export default function SettingsScreen({ navigation, route }: SettingsStackNavProps<"Settings">) {

    // Alarm screen
    
    const initAlarmPage = () => {
     
    }
    const fetchUserAlarms = () => {
            
    }
    const fetchUserAlarmHistory = () => {
            
    }
    const newAlarm = (coin:Coin,value:number) => {

    }
    const deleteAlarm = (alarm:Alarm) => {

    }
 
    const createSellOrder = (Coin:Coin,BuyValue:number,Threshold:number) => {

    }
    const createBuyOrder = (Coin:Coin,BuyValue:number,Threshold:number) => {
  
    }
   

    return (
        <Text>Alarm screen</Text>
    )
}
