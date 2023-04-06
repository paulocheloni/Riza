import React, { ReactElement } from 'react'
 
import DetailsScreen from '../../Screens/DetailsScreen/DetailsScreen'
import { createStackNavigator } from '@react-navigation/stack'

 
const Stack = createStackNavigator()

const DetailsRoutes = (): ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="DetailsScreen">
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
      /> 
    </Stack.Navigator>
  )
}

export default DetailsRoutes
