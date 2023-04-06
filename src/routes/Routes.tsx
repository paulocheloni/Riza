import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import PostScreen from "../Screens/PostScreen/PostScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";  
import { navigationRef } from "../helpers/navigatorRef";
import DetailsRoutes from "./Stack/Stack"; 
import { usePostStore } from "../store/post/post.store";

const Tab = createBottomTabNavigator();

export function MyTabs() {

  const { setPost } = usePostStore() as unknown as { setPost: (post: any) => void };


  return (
    <NavigationContainer
    ref={navigationRef}
    >
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
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} testID="home-icon"/>
            ),
          }}
          listeners={( ) => ({
            tabPress: e => {
              setPost({})
            }
          })}
        />
        <Tab.Screen
          name="PostScreen"
          component={PostScreen}
          options={{
            tabBarLabel: "Post",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="post-outline"
                size={24}
                color={color}
                testID="post-icon"

              />
            ),
          }}
          listeners={( ) => ({
            tabPress: e => {
              setPost({})
            }
          })}
        />
       <Tab.Screen
          name="DetailsScreenStack"
          component={DetailsRoutes}
          options={{ 
            tabBarButton: () => null
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
