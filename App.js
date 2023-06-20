import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Navigation/TabNavigator';
import DrawerNavigator from './Navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
