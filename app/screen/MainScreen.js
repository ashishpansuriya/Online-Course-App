/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';
import Colors from '../assets/colors/Colors';
import MainScreenComponent from '../components/MainScreenComponent';
import FirstPage from '../tab/FirstPage';
import FourthPage from '../tab/FourthPage';
import SecondPage from '../tab/SecondPage';
import ThirdPage from '../tab/ThirdPage';

const MainScreen = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={styles.sectionContainer}>
        <MainScreenComponent />

        <Tab.Navigator screenOptions={{
              tabBarLabelStyle: {fontSize: 12},
              tabBarItemStyle: {width: 100},
              tabBarActiveTintColor: '#e91e63',
              
              tabBarStyle: {backgroundColor: 'white'},
            }}>
          <Tab.Screen
            name="All"
            component={FirstPage}
            
          />
          <Tab.Screen name="Design" component={SecondPage} />
          <Tab.Screen name="Programming" component={ThirdPage} />
          <Tab.Screen name="UI/UX" component={FourthPage} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: Colors.Silver,
  },

  AndroidSafeArea: {
    flex: 1,
    backgroundColor: Colors.Silver,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default MainScreen;
