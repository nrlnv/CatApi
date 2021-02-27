import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BreedsScreen from '../screens/BreedsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="BreedsScreen"
      tabBarOptions={{
        activeTintColor: 'red',
      }}>
      <Tab.Screen
        name="BreedsScreen"
        component={BreedsScreen}
        options={{
          tabBarLabel: 'HOME',
        }}
      />
      <Tab.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{
          tabBarLabel: 'FAVOURITES',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
