import React from 'react';
import Contacts from './Screens/Contacts';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './Store';
import ProfileContact from './Screens/ProfileContact';
import Favorites from './Screens/Favorites';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  const ContactScreens = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{title: 'Contacts'}}
        />
        <Stack.Screen
          name="ProfileContact"
          component={ProfileContact}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    );
  };
  const FavSreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{title: 'Favorites'}}
        />
        <Stack.Screen
          name="ProfileContact"
          component={ProfileContact}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    );
  };
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="ContactsScreens"
        labeled={false}
        activeColor={'gray'}
        inactiveColor={'black'}
      >
        <Tab.Screen
          name="Contacts"
          component={ContactScreens}
          options={{
            tabBarIcon: 'format-list-bulleted',
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavSreen}
          options={{tabBarIcon: 'star-check'}}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
