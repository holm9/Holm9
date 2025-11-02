import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MatchesScreen from '../screens/MatchesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="الرئيسية" component={HomeScreen} />
      <Tab.Screen name="المباريات" component={MatchesScreen} />
      <Tab.Screen name="الإعدادات" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
