import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from "./AppParamList";

import { HomeStack } from "../HomeStackNavigator/HomeStack";

import { Icon } from "native-base";
import { MarketStack } from "../VideoStackNavigator/MarketStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SideBar } from "../../components";
import { SettingsStack } from "../SettingsStackNavigator/SettingsStack";

interface AppTabsProps { }

const Tabs = createBottomTabNavigator<AppParamList>();
const Drawer = createDrawerNavigator();

type IconTypes = "Entypo" | "AntDesign" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial" | undefined


const AppTabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent = Icon;
          let iconName;
          let IconType: IconTypes = "Entypo"
          if (route.name === "Home") {
            iconName = `home`;
            IconType = "FontAwesome";
          }
          else if (route.name === "Piyasalar") {
            iconName = `line-chart`;
            IconType = "FontAwesome";
          }
          else if (route.name === "Profil") {
            iconName = `comment`;
            IconType = "FontAwesome";
          }
          return <IconComponent type={IconType} name={iconName} style={{ fontSize: 25, marginTop: 5, color: color }} />;

        },
        header: null,
      })}
      tabBarOptions={{
        activeTintColor: '#008ccc',
        inactiveTintColor: 'gray',
        inactiveBackgroundColor: '#fff',
        activeBackgroundColor: '#fff',
        style: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
        }
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Piyasalar" component={MarketStack} />
      <Tabs.Screen name="Profil" component={SettingsStack} />

    </Tabs.Navigator>
  )
}
const PUSH_ENDPOINT = 'http://pn.medanis.net/register-token.php';

export const AppTabs: React.FC<AppTabsProps> = ({ }) => {
  
  return (
    <Drawer.Navigator drawerContent={(props) => <SideBar  />}>
      <Drawer.Screen name="Homex" component={AppTabNavigator} />

    </Drawer.Navigator>
  );
};

// useEffect(() => {
  //   registerForPushNotificationsAsync()
  // }, [])
  // const registerForPushNotificationsAsync = async () => {
  //   return
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!');
  //       return;
  //     }
  //     const token = (await Notifications.getExpoPushTokenAsync()).data;
  //     console.log("token=", token);
  //     fetch(PUSH_ENDPOINT, {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         token,
  //         app: 'Borsa',
  //       }),
  //     }).then((response) => response.text())
  //       .then((json) => {
   

  //       });
  //   } else {
  //     alert('Must use physical device for Push Notifications');
  //   }

  //   if (Platform.OS === 'android') {
  //     Notifications.setNotificationChannelAsync('default', {
  //       name: 'default',
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: '#FF231F7C',
  //     });
  //   }
  // };