import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import { Entypo } from "@expo/vector-icons";
import PostScreen from "../../Screens/PostScreen/PostScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import DetailsRoutes from "./Stack";
import React from "react";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" size={24} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="PostScreen"
      component={PostScreen}
      options={{
        tabBarLabel: "Post",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="post-outline"
            size={24}
            color="black"
          />
        ),
      }}
    />
   <Tab.Screen
      name="DetailsScreenStack"
      component={DetailsRoutes}
      options={{ 
        tabBarButton: () => null
      }}
    />
  </Tab.Navigator>
  );
}
