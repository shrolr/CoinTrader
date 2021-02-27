import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { AuthNavProps } from '../Routes/AuthStackNavigator/AuthParamList';


export default function LoignScreen({ navigation }: AuthNavProps<"Login">) {

  return (
    <View style={{ justifyContent: "center", alignContent: "center", flex: 1 }}>
    
        <Text>Register</Text>
   
    </View>
  )
}
