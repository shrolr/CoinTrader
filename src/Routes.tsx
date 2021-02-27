import React  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppTabs } from "./Routes/AppTabNavigator/AppTabs";
import { AuthStack } from "./Routes/AuthStackNavigator/AuthStack";


interface RoutesProps { }

export const Routes: React.FC<RoutesProps> = ({ }) => {
  const  isAuthenticated  = true;
  return (
    <NavigationContainer>
      { isAuthenticated  ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
